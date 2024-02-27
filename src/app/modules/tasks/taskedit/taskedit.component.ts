import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TasksService } from '../services/tasks.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-taskedit',
  templateUrl: './taskedit.component.html',
  styleUrl: './taskedit.component.css'
})
export class TaskeditComponent {

  formulario2: FormGroup;

  task: any

  constructor(private readonly route:ActivatedRoute, private readonly tasksService: TasksService, private readonly router: Router){
    this.formulario2 = new FormGroup({
      name: new FormControl(''),
      done: new FormControl(''),
    })
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.editTask(id!)
  }

  editTask(taskId: string) {
    this.tasksService.getTaskDetails(taskId).subscribe(task => {
      this.task = task;
      this.formulario2.patchValue({name: this.task.name, done: this.task.done})
    });
  }

  saveTask(taskId: string){
    const {name, done} = this.formulario2.value
    console.log(done, typeof done)
    this.tasksService.getUpdateTask(taskId,{name, done: typeof done === "string" && done === 'true' ? true : false}).subscribe(() => {
      this.router.navigate(['tasks'])
    })
  }

}

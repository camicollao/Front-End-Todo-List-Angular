import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TasksService } from '../tasks/services/tasks.service';
import Swal from 'sweetalert2';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  createNewTask: FormGroup;
  tasks: any[] = [];
  task: any;

  constructor(private readonly tasksService: TasksService, private readonly router: Router){
    this.createNewTask = new FormGroup({
      name: new FormControl('')
    })
  }

  ngOnInit(): void {
    this.tasksService.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
    })
  }


  postTask(task: string){
    const {name} = this.createNewTask.value
    console.log(name)
    this.tasksService.postTask({name, done: true}).subscribe(() => {
      this.tasksService.getTasks().subscribe((tasks) =>{
        this.tasks = tasks
      })
      Swal.fire({
        icon: "success",
        title: "La tarea ha sido guardada correctamente",
        showConfirmButton: false,
        timer: 1500
      });
      this.router.navigate([`tasks`])
      });
    }

}

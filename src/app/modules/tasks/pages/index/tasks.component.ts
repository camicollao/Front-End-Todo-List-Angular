import { Component, OnInit } from '@angular/core';
import {TasksService} from '../../services/tasks.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent implements OnInit{
  tasks: any[] = [];
  task: any

  constructor(private readonly tasksService: TasksService, private readonly router: Router){}

  ngOnInit(): void {
    this.tasksService.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
    })
  }

  loadTaskDetails(taskId:any){
    this.router.navigate([`/tasks/${taskId}`])
  }

  loadTaskEdit(taskId:any){
    this.router.navigate([`/tasks/edit/${taskId}`])
  }

  getTaskdel(taskId: string){
    this.tasksService.getDeleteTask(taskId).subscribe(() =>{
      this.tasksService.getTasks().subscribe((tasks) =>{
        this.tasks = tasks
      })
      console.log('la tarea ha sido eliminada')
    });
  }


}

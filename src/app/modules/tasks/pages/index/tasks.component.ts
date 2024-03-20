import { Component, OnInit } from '@angular/core';
import {TasksService} from '../../services/tasks.service'
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

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
    Swal.fire({
      title: "¿Estas seguro de eliminar esta tarea?",
      text: "Una vez que lo elimines, no podrás recuperar esta tarea!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Eliminar"
    }).then((result) => {
      if (result.isConfirmed) {
        this.tasksService.getDeleteTask(taskId).subscribe(() =>{
          this.tasksService.getTasks().subscribe((tasks) =>{
            this.tasks = tasks
          })
        });
        Swal.fire({
          title: "La tarea ha sido eliminada",
          icon: "success"
        });
      }
    });
  }


}

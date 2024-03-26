import { Component, OnInit } from '@angular/core';
import {TasksService} from '../../services/tasks.service'
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent implements OnInit{

  createNewTask: FormGroup;
  tasks: any[] = [];
  task: any

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

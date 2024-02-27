import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TasksService } from '../../services/tasks.service';
@Component({
  selector: 'app-taskdetails',
  templateUrl: './taskdetails.component.html',
  styleUrl: './taskdetails.component.css'
})
export class TaskdetailsComponent implements OnInit {

  task: any

  constructor(private readonly route:ActivatedRoute, private readonly tasksService: TasksService){}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.loadTaskDetails(id!)
  }

  loadTaskDetails(taskId: string) {
    this.tasksService.getTaskDetails(taskId).subscribe(task => {
      this.task = task;
      console.log(task)
    });
  }


}


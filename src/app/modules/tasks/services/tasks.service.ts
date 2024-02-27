import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private readonly httpClient: HttpClient) { }

  getTasks(){
    return this.httpClient.get<any>('http://localhost:3000/task',{
      headers:{
        Authorization:`Bearer ${localStorage.getItem('access_token')}`
      },
    })
  }

  getTaskDetails(id: string):Observable<any>{
    return this.httpClient.get<any>(`http://localhost:3000/task/${id}`,{
      headers:{
        Authorization:`Bearer ${localStorage.getItem('access_token')}`
      },
    },
    )
  }

  getDeleteTask(id: string):Observable<any>{
    return this.httpClient.delete<any>(`http://localhost:3000/task/${id}`)
  }

  getUpdateTask(id: string, updatedTask: any){
    return this.httpClient.patch(`http://localhost:3000/task/${id}`, updatedTask)
  }

}

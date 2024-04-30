import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private readonly httpClient: HttpClient) { }

  getUsers(){
    return this.httpClient.get<any>('http://localhost:3000/users')
  }

  postUser(user: any){
    return this.httpClient.post('http://localhost:3000/users', user)
  }

  getUserInfo(id: string):Observable<any>{
    return this.httpClient.get<any>(`http://localhost:3000/users/${id}`, {
      headers:{
        Authorization:`Bearer ${localStorage.getItem('access_token')}`
      },
    },
    )
  }

  getUpdateUser(id: string, updatedUser: any){
    return this.httpClient.patch(`http://localhost:3000/users/${id}`, updatedUser, {
      headers:{
        Authorization:`Bearer ${localStorage.getItem('access_token')}`
      },
    },)
  }

  getDeleteUser(id: string):Observable<any>{
    return this.httpClient.delete<any>(`http://localhost:3000/users/${id}`, {
      headers:{
        Authorization:`Bearer ${localStorage.getItem('access_token')}`
      },
    },)
  }
}

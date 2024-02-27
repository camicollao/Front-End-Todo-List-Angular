import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private readonly httpClient: HttpClient) { }

  login(loginData: any){
    return this.httpClient.post<any>('http://localhost:3000/auth/login', loginData);
  }

  private(){
    return this.httpClient.get<any>('http://localhost:3000/auth/login',{
      headers:{
        Authorization: `Bearer ${localStorage.getItem('access_token')}`
      },
    });
  }
}

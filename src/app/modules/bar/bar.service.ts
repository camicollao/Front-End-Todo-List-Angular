import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class BarService {

  constructor(private readonly httpClient: HttpClient, private readonly router: Router) {}

  logout() {
    Swal.fire({
      icon: "success",
      title: "Sesion finalizada correctamente",
      showConfirmButton: false,
      timer: 1500
    });
    return this.httpClient.get('http://localhost:3000', {
      headers: {
        Authorization: `Bearer ${localStorage.removeItem('access_token')}`
      }
    });
  }
  
}

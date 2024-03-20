import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { BarService } from './bar.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrl: './bar.component.css'
})
export class BarComponent {

  constructor(private readonly barService: BarService, private readonly router: Router){}

  logout(){
    Swal.fire({
      title: "¿Estas seguro de cerrar sesion?",
      text: "Tendras que iniciar sesion nuevamente para acceder a tus tareas",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Cerrar sesion",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem('access_token');
        this.router.navigate(['/users']);
        Swal.fire({
          icon: "success",
          title: "Sesion finalizada correctamente",
          showConfirmButton: false,
          timer: 1500
        });
      }
    });

  }
}

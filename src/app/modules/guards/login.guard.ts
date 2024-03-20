import { inject } from "@angular/core";
import { Router } from "@angular/router";
import Swal from 'sweetalert2';

export const loginGuard = () => {

    const router = inject(Router);

    if(localStorage.getItem('access_token')){
        return true;
    }else{
        Swal.fire({
            icon: "error",
            title: "No se puede acceder a esta pagina sin iniciar sesion",
            showConfirmButton: false,
            timer: 1500
          });
        router.navigate(['/users']);
        return false;
    }
}
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {UsersService} from '../../services/users.service'
import { Router } from '@angular/router'; 
import Swal from 'sweetalert2';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {

  formulario: FormGroup;
  constructor(private readonly usersService: UsersService,
    private router: Router){
    this.formulario = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl(''),
    })
  }

  onSubmit(){
    this.usersService.login(this.formulario.value).subscribe(response => {
      localStorage.setItem('access_token', response.access_token);
      this.router.navigate(['/tasks'])
    }, (error) => {
      Swal.fire({
        icon: "error",
        title: "Tus datos son incorrectos",
        text: "Tu correo o contraseña son incorrectos, intentado de nuevo.",
      });
    
    });
  }

  private(){
    this.usersService.private().subscribe((response => {
      console.log(response);
    }))
  }
  
}


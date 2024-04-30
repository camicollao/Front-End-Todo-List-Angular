import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from '../home/home.service';
import Swal from 'sweetalert2';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  createNewUser: FormGroup;
  users: any[] = [];
  user: any;

  constructor(private readonly homeService: HomeService, private readonly router: Router){
    this.createNewUser = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
    })
  }

  ngOnInit(): void {
    this.homeService.getUsers().subscribe((users) => {
      this.users = users;
    })
  }


  postUser(user: any){
    const {name} = this.createNewUser.value
    console.log(name)
    const {email} = this.createNewUser.value
    console.log(email)
    const {password} = this.createNewUser.value
    console.log(password)
    this.homeService.postUser({name, email, password}).subscribe(() => {
      this.homeService.getUsers().subscribe((users) =>{
        this.users = users
      })
      Swal.fire({
        icon: "success",
        title: "Cuenta creada",
        showConfirmButton: false,
        timer: 1500
      });
      this.router.navigate([`users`])
      });
    }

}

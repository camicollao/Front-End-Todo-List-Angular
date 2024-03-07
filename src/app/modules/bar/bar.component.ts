import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BarService } from './bar.service';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrl: './bar.component.css'
})
export class BarComponent {

  constructor(private readonly barService: BarService, private readonly router: Router){}

  logout(){
    this.barService.logout().subscribe(() => {
      this.router.navigate(['/users'])
    })
  }
}

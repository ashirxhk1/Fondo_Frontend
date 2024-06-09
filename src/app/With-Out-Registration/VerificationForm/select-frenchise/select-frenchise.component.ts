import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-frenchise',
  standalone: true,
  imports: [],
  templateUrl: './select-frenchise.component.html',
  styleUrl: './select-frenchise.component.scss'
})
export class SelectFrenchiseComponent {

  constructor(private router:Router){}

  gotoLogin(){
    this.router.navigate(['gotoLogin'])
  }
  
  goToRegFrenchise(){
    this.router.navigate(['goToRegFrenchise'])
  }
}

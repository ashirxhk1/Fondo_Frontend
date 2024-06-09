import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-frenchise',
  standalone: true,
  imports: [],
  templateUrl: './register-frenchise.component.html',
  styleUrl: './register-frenchise.component.scss'
})
export class RegisterFrenchiseComponent {

  constructor(private router:Router){}

  goToFrenchise(){
    this.router.navigate(['goToFrenchise'])
  }

  goToAddress(){
    this.router.navigate(['goToAddress'])
  }

}

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-address',
  standalone: true,
  imports: [],
  templateUrl: './address.component.html',
  styleUrl: './address.component.scss'
})
export class AddressComponent {

  constructor(private router:Router){}

  goToRegFrenchise(){
    this.router.navigate(['goToRegFrenchise'])
  }

  goToContact(){
    this.router.navigate(['goToContact'])
  }

}

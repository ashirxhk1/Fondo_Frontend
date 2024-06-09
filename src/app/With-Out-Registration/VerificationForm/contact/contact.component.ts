import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  constructor (private router:Router){}

  goToAddress(){
    this.router.navigate(['goToAddress'])
  }

  goToVerification(){
    this.router.navigate(['goToVerification'])
  }

}

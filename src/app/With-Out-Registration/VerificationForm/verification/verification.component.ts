import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verification',
  standalone: true,
  imports: [],
  templateUrl: './verification.component.html',
  styleUrl: './verification.component.scss'
})
export class VerificationComponent {

  constructor (private router:Router){}

  goToContact(){
    this.router.navigate(['goToContact'])
  }

  goToVerify(){
    this.router.navigate(['goToVerify'])
  }

}

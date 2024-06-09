import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verify',
  standalone: true,
  imports: [],
  templateUrl: './verify.component.html',
  styleUrl: './verify.component.scss'
})
export class VerifyComponent {

  constructor(private router:Router){}

  goToVerification(){
    this.router.navigate(['goToVerification'])
  }

  goToLayout(){
    this.router.navigate(['goToLayout'])
  }


}

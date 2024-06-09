import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { LandingPageComponent } from './LandingPage/landing-page/landing-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'trace-web';



//   constructor(private r : Router){
//   }
//   gotoLanding(){
// this.r.navigate(['landing']);
//   }
}

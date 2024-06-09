import { Component } from '@angular/core';
import { SideNavbarComponent } from '../ComponentsFolder/side-navbar/side-navbar.component';
import {  RouterOutlet } from '@angular/router';
import { HomeNavComponent } from '../ComponentsFolder/home-nav/home-nav.component';
import { RestautantNavComponent } from '../ComponentsFolder/restautant-nav/restautant-nav.component';
import { AdminNavComponent } from '../ComponentsFolder/admin-nav/admin-nav.component';
import { TopNavbarComponent } from '../ComponentsFolder/top-navbar/top-navbar.component';


@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [SideNavbarComponent, RouterOutlet,AdminNavComponent,TopNavbarComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

  


}

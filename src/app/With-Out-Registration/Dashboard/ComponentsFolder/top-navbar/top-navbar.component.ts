import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-top-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './top-navbar.component.html',
  styleUrl: './top-navbar.component.scss'
})
export class TopNavbarComponent {

  navLinks = [
    {
      id: 1,
      name: "Home",
      icon: "/assets/home-nav.svg",
      url: "homeNav",
    },
    {
      id: 2,
      name: "Restaurant",
      icon: "/assets/restaurant-nav.svg",
      url: "restaurantNav",
    },
    {
      id: 3,
      name: "Dish",
      icon: "/assets/dish-nav.svg",
      url: "goToMenu",
    },
    {
      id: 4,
      name:"Profile",
      icon: "/assets/Profile.svg",
      url: "profileNav"
    },
    {
      id: 5,
      name:"Ranking",
      icon: "/assets/ranking-nav.svg",
      url: "rankingNav"
    },
    {
      id: 6,
      name:"Promotion",
      icon: "/assets/PromotionNav.svg",
      url: "PromotionNav"
    },
    {
      id: 7,
      name:"Analytic",
      icon: "/assets/AnalyticNav.svg",
      url: "AnalyticNav"
    },
    {
      id: 8,
      name:"Account",
      icon: "/assets/AccountNav.svg",
      url: "AccountNav"
    },
    {
      id: 9,
      name:"Validation",
      icon: "/assets/Validation-Nav.svg",
      url: "ValidationtNav"
    },
    {
      id: 10,
      name:"Modification",
      icon: "/assets/ModificationNav.svg",
      url: "ModificationNav"
    },
    {
      id: 11,
      name:"Custom Service",
      icon: "/assets/CustomServiceNav.svg",
      url: "CustomServiceNav"
    },
    {
      id: 12,
      name:"TraceUser",
      icon: "/assets/TraceUserNav.svg",
      url: "TraceUserNav"
    },
   
  ];
  links: any;

}

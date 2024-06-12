
import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { ViewsEnum } from "../../../../Enums/Views.enum";

@Component({
  selector: "app-side-navbar",
  standalone: true,
  imports: [RouterLink],
  templateUrl: "./side-navbar.component.html",
  styleUrl: "./side-navbar.component.scss",
})
export class SideNavbarComponent {
viewsEnums= ViewsEnum; 
  navLinks = [
    {
      id: 1,
      name: "Home",
      icon: "./assets/home-nav.svg",
      url: "homeNav",
      role:[this.viewsEnums.WithoutRegisterView,this.viewsEnums.RegisterView,this.viewsEnums.RestuarantView,this.viewsEnums.AdminView ]
    },
    {
      id: 2,
      name: "Restaurant",
      icon: "./assets/restaurant-nav.svg",
      url: "restaurantNav",
      role:[this.viewsEnums.WithoutRegisterView,this.viewsEnums.RegisterView ]
    },
    {
      id: 3,
      name: "Dish",
      icon: "./assets/dish-nav.svg",
      url: "goToMenu",
      role:[this.viewsEnums.WithoutRegisterView,this.viewsEnums.RegisterView ]
    },
    {
      id: 4,
      name:"Profile",
      icon: "./assets/Profile.svg",
      url: "profileNav",
      role:[this.viewsEnums.RegisterView,this.viewsEnums.RestuarantView]
    },
    {
      id: 5,
      name:"Ranking",
      icon: "./assets/ranking-nav.svg",
      url: "rankingNav",
      role:[this.viewsEnums.WithoutRegisterView,this.viewsEnums.RegisterView,this.viewsEnums.RestuarantView]
    },
    {
      id: 6,
      name:"Promotion",
      icon: "./assets/PromotionNav.svg",
      url: "PromotionNav",
      role:[this.viewsEnums.RestuarantView]
    },
    {
      id: 7,
      name:"Analytic",
      icon: "./assets/AnalyticNav.svg",
      url: "AnalyticNav",
      role:[this.viewsEnums.RestuarantView,this.viewsEnums.AdminView ]
    },
    {
      id: 8,
      name:"Account",
      icon: "./assets/AccountNav.svg",
      url: "AccountNav",
      role:[this.viewsEnums.RestuarantView]
    },
    {
      id: 9,
      name:"Validation",
      icon: "./assets/Validation-Nav.svg",
      url: "ValidationtNav",
      role:[this.viewsEnums.AdminView ]
    },
    {
      id: 10,
      name:"Modification",
      icon: "./assets/ModificationNav.svg",
      url: "ModificationNav",
      role:[this.viewsEnums.AdminView ]
    },
    {
      id: 11,
      name:"Custom Service",
      icon: "./assets/CustomServiceNav.svg",
      url: "CustomServiceNav",
      role:[this.viewsEnums.AdminView ]
    },
    {
      id: 12,
      name:"TraceUser",
      icon: "./assets/TraceUserNav.svg",
      url: "TraceUserNav",
      role:[this.viewsEnums.AdminView ]
    },
   
  ];
  links: any;
}

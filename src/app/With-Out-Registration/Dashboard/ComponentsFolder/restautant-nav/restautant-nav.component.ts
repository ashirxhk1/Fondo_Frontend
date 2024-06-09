import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-restautant-nav",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./restautant-nav.component.html",
  styleUrl: "./restautant-nav.component.scss",
})
export class RestautantNavComponent {
  constructor(private route: Router) {}

  TopRestaurant = [
    {
      id: 1,
      icon: "/assets/shawnanggg-nmpW_WwwVSc-unsplash.jpg",
      name: "Top Restaurant Restaurant",
      rating: "4.5",
      url: "goToDetail",
    },
    {
      id: 2,
      icon: "/assets/shawnanggg-nmpW_WwwVSc-unsplash.jpg",
      name: "Top Restaurant Restaurant",
      rating: "4.5",
      url: "goToDetail",
    },
    {
      id: 3,
      icon: "/assets/shawnanggg-nmpW_WwwVSc-unsplash.jpg",
      name: "Top Restaurant Restaurant",
      rating: "4.5",
      url: "goToDetail",
    },
    {
      id: 4,
      icon: "/assets/shawnanggg-nmpW_WwwVSc-unsplash.jpg",
      name: "Top Restaurant Restaurant",
      rating: "4.5",
      url: "goToDetail",
    },
    {
      id: 5,
      icon: "/assets/shawnanggg-nmpW_WwwVSc-unsplash.jpg",
      name: "Top Restaurant Restaurant",
      rating: "4.5",
      url: "goToDetail",
    },
    {
      id: 6,
      icon: "/assets/shawnanggg-nmpW_WwwVSc-unsplash.jpg",
      name: "Top Restaurant Restaurant",
      rating: "4.5",
      url: "goToDetail",
    },
    {
      id: 7,
      icon: "/assets/shawnanggg-nmpW_WwwVSc-unsplash.jpg",
      name: "Top Restaurant Restaurant",
      rating: "4.5",
      url: "goToDetail",
    },
    {
      id: 8,
      icon: "/assets/shawnanggg-nmpW_WwwVSc-unsplash.jpg",
      name: "Top Restaurant Restaurant",
      rating: "4.5",
      url: "goToDetail",
    },
    {
      id: 9,
      icon: "/assets/shawnanggg-nmpW_WwwVSc-unsplash.jpg",
      name: "Top Restaurant Restaurant",
      rating: "4.5",
      url: "goToDetail",
    },
  ];
  items: any;

  TopSellerProducts = [
    {
      id: 1,
      icon: "/assets/Top-Seller.jpg",
      name: "Chicken Pizza",
      price: "$ 120.20",
      rating: "4.5k",
    },
    {
      id: 2,
      icon: "/assets/Top-Seller.jpg",
      name: "Chicken Pizza",
      price: "$ 120.20",
      rating: "4.5k",
    },
    {
      id: 3,
      icon: "/assets/Top-Seller.jpg",
      name: "Chicken Pizza",
      price: "$ 120.20",
      rating: "4.5k",
    },
    {
      id: 4,
      icon: "/assets/Top-Seller.jpg",
      name: "Chicken Pizza",
      price: "$ 120.20",
      rating: "4.5k",
    },
    {
      id: 5,
      icon: "/assets/Top-Seller.jpg",
      name: "Chicken Pizza",
      price: "$ 120.20",
      rating: "4.5k",
    },
    {
      id: 6,
      icon: "/assets/Top-Seller.jpg",
      name: "Chicken Pizza",
      price: "$ 120.20",
      rating: "4.5k",
    },
    {
      id: 7,
      icon: "/assets/Top-Seller.jpg",
      name: "Chicken Pizza",
      price: "$ 120.20",
      rating: "4.5k",
    },
    {
      id: 8,
      icon: "/assets/Top-Seller.jpg",
      name: "Chicken Pizza",
      price: "$ 120.20",
      rating: "4.5k",
    },
    {
      id: 9,
      icon: "/assets/Top-Seller.jpg",
      name: "Chicken Pizza",
      price: "$ 120.20",
      rating: "4.5k",
    },
    {
      id: 10,
      icon: "/assets/Top-Seller.jpg",
      name: "Chicken Pizza",
      price: "$ 120.20",
      rating: "4.5k",
    },
  ];

  nevigate(route:string){
    this.route.navigate(['goToLayout/goToDetail'])   
  }

}

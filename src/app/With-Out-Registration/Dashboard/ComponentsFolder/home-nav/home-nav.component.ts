import { Component } from '@angular/core';
import { Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-nav',
  standalone: true,
  imports: [RouterLink,RouterModule,CommonModule],
  templateUrl: './home-nav.component.html',
  styleUrl: './home-nav.component.scss'
})
export class HomeNavComponent {

  isAdmin: boolean = false

constructor(private route :Router){}

  TopRestaurantItems = [
    
    {id:1,  icon:'./assets/top-restaurant.jpg', name: 'Food Restaurantt' , rank: '4.5', url:'goToDetail'},
    {id:2,  icon:'./assets/top-restaurant.jpg', name: 'Food Restaurantt' , rank: '4.5', url:'goToFollower'},
    {id:3,  icon:'./assets/top-restaurant.jpg', name: 'Food Restaurantt' , rank: '4.5', url:'goToDetail'},
    {id:4,  icon:'./assets/top-restaurant.jpg', name: 'Food Restaurantt' , rank: '4.5', url:'goToDetail'},
    {id:5,  icon:'./assets/top-restaurant.jpg', name: 'Food Restaurantt' , rank: '4.5', url:'goToDetail'},
    {id:6,  icon:'./assets/top-restaurant.jpg', name: 'Food Restaurantt' , rank: '4.5', url:'goToDetail'},
    {id:7,  icon:'./assets/top-restaurant.jpg', name: 'Food Restaurantt' , rank: '4.5', url:'goToDetail'},
    {id:8,  icon:'./assets/top-restaurant.jpg', name: 'Food Restaurantt' , rank: '4.5', url:'goToDetail'},
    
  ]
items: any;

TopSellerProducts =[
  {id:1, icon:'./assets/top-prodeuct-2.jpg', name:'Chicken Pizza', price:'$ 120.20', rating:'4.5k' },
  {id:2, icon:'./assets/top-prodeuct-2.jpg', name:'Chicken Pizza', price:'$ 120.20', rating:'4.5k' },
  {id:3, icon:'./assets/top-prodeuct-2.jpg', name:'Chicken Pizza', price:'$ 120.20', rating:'4.5k' },
  {id:4, icon:'./assets/top-prodeuct-2.jpg', name:'Chicken Pizza', price:'$ 120.20', rating:'4.5k' },
  {id:5, icon:'./assets/top-prodeuct-2.jpg', name:'Chicken Pizza', price:'$ 120.20', rating:'4.5k' },
  {id:6, icon:'./assets/top-prodeuct-2.jpg', name:'Chicken Pizza', price:'$ 120.20', rating:'4.5k' },
  {id:7, icon:'./assets/top-prodeuct-2.jpg', name:'Chicken Pizza', price:'$ 120.20', rating:'4.5k' },
  {id:8, icon:'./assets/top-prodeuct-2.jpg', name:'Chicken Pizza', price:'$ 120.20', rating:'4.5k' },
  {id:9, icon:'./assets/top-prodeuct-2.jpg', name:'Chicken Pizza', price:'$ 120.20', rating:'4.5k' },
  {id:10, icon:'./assets/top-prodeuct-2.jpg', name:'Chicken Pizza', price:'$ 120.20', rating:'4.5k' },

]

HumburgurItems =[
  {id:1, icon:'./assets/top-Seller.jpg', name:'Chicken Pizza', rating:'4.5k' },
  {id:2, icon:'./assets/top-Seller.jpg', name:'Chicken Pizza', rating:'4.5k' },
  {id:3, icon:'./assets/top-Seller.jpg', name:'Chicken Pizza', rating:'4.5k' },
  {id:4, icon:'./assets/top-Seller.jpg', name:'Chicken Pizza', rating:'4.5k' },
  {id:5, icon:'./assets/top-Seller.jpg', name:'Chicken Pizza', rating:'4.5k' },
  {id:6, icon:'./assets/top-Seller.jpg', name:'Chicken Pizza', rating:'4.5k' },
  {id:7, icon:'./assets/top-Seller.jpg', name:'Chicken Pizza', rating:'4.5k' },
  {id:8, icon:'./assets/top-Seller.jpg', name:'Chicken Pizza', rating:'4.5k' },
  {id:9, icon:'./assets/top-Seller.jpg', name:'Chicken Pizza', rating:'4.5k' },
  {id:10, icon:'./assets/top-Seller.jpg', name:'Chicken Pizza', rating:'4.5k' },

]


nevigate(route:string){
  this.route.navigate(['goToLayout/goToDetail'])   
}
}

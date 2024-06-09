import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

  constructor(private route:Router){}
  // goToProduct(){
  //   this.router.navigate(['goToProduct'])
  // }

  nevigate(route:string){
    this.route.navigate(['goToLayout/goToMenu'])   
  }


  MenuItems=[
    {id:1, icon:'/assets/top-restaurant.jpg', name:'Marvle Bar', price:'$120', rating:'(2.5k)',},
    {id:2, icon:'/assets/top-restaurant.jpg', name:'Marvle Bar', price:'$120', rating:'(2.5k)',},
    {id:3, icon:'/assets/top-restaurant.jpg', name:'Marvle Bar', price:'$120', rating:'(2.5k)',},
    {id:4, icon:'/assets/top-restaurant.jpg', name:'Marvle Bar', price:'$120', rating:'(2.5k)',},
    {id:5, icon:'/assets/top-restaurant.jpg', name:'Marvle Bar', price:'$120', rating:'(2.5k)',},
    {id:6, icon:'/assets/top-restaurant.jpg', name:'Marvle Bar', price:'$120', rating:'(2.5k)',},
    {id:7, icon:'/assets/top-restaurant.jpg', name:'Marvle Bar', price:'$120', rating:'(2.5k)',},
    {id:8, icon:'/assets/top-restaurant.jpg', name:'Marvle Bar', price:'$120', rating:'(2.5k)',},
    {id:9, icon:'/assets/top-restaurant.jpg', name:'Marvle Bar', price:'$120', rating:'(2.5k)',},
    {id:10, icon:'/assets/top-restaurant.jpg', name:'Marvle Bar', price:'$120', rating:'(2.5k)',},
  ]


}

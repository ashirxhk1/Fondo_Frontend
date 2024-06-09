import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-r-details-page',
  standalone: true,
  imports: [],
  templateUrl: './r-details-page.component.html',
  styleUrl: './r-details-page.component.scss'
})
export class RDetailsPageComponent {


  // constructor(private router:Router){}
  // goToMenu(){
  //   this.router.navigate(['goToMenu']);
  // }

  
  GelleryImg=[
    {id:1, img:"/assets/top-prodeuct-2.jpg"},
    {id:2, img:"/assets/Top-Seller.jpg"},
    {id:3, img:"/assets/top-prodeuct-2.jpg"},
    {id:4, img:"/assets/Top-Seller.jpg"},
    {id:5, img:"/assets/top-prodeuct-2.jpg"},
    {id:6, img:"/assets/Top-Seller.jpg"},
    {id:7, img:"/assets/top-prodeuct-2.jpg"},
    {id:8, img:"/assets/Top-Seller.jpg"},
    {id:9, img:"/assets/top-prodeuct-2.jpg"},
  ]

  Follower=[
    {id:1, img:"/assets/top-prodeuct-2.jpg"},
    {id:2, img:"/assets/Top-Seller.jpg"},
    {id:3, img:"/assets/top-prodeuct-2.jpg"},
    {id:4, img:"/assets/Top-Seller.jpg"},
    {id:5, img:"/assets/top-prodeuct-2.jpg"},
    {id:6, img:"/assets/Top-Seller.jpg"},
    {id:7, img:"/assets/top-prodeuct-2.jpg"},
    {id:8, img:"/assets/Top-Seller.jpg"},
    {id:9, img:"/assets/top-prodeuct-2.jpg"},
    {id:10, img:"/assets/Top-Seller.jpg"},
    {id:11, img:"/assets/top-prodeuct-2.jpg"},
    {id:12, img:"/assets/Top-Seller.jpg"},
  ]

}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { AuthService } from '../../../Services/auth.service';

export class LoginDto{
  UserName:string ='';
  Password:string = ''

}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})


export class LoginComponent {

  form:FormGroup = {} as FormGroup ; 
  constructor(private router:Router, private fb:FormBuilder, private authService:AuthService ) { 
    this.buildForm();
  }


  buildForm(){
    this.form = this.fb.group({
      UserName : ['',Validators.required],
      Password : ['',Validators.required],
    });
 }
  gotoRegister(){
    this.router.navigate(['gotoRegister']);
  }

  goToFrenchise(){
    this.router.navigate(['goToFrenchise']);
  }

 async login(){
  
  this.goToFrenchise()
  
    // let formValues = this.form.value as LoginDto; 
  
    // let res = await this.authService.login(formValues);
    // if(res){
    //   this.goToFrenchise()
    // }else{
    //   this.goToFrenchise()
    // }
    
  }


}

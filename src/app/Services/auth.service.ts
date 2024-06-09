
import { Injectable } from '@angular/core';
import { Observable, lastValueFrom } from 'rxjs';
import { API_ENDPOINTS } from '../Utils/global';
import { RegistrationDto } from '../With-Out-Registration/login-register/register/register.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService  {

    constructor(private http: HttpClient) { }

    register(user: RegistrationDto) {
     return lastValueFrom(this.http.post(API_ENDPOINTS.registration,user));
    }
  
    login(credentials: any) {
      return lastValueFrom(this.http.post(API_ENDPOINTS.login,credentials));
  
    }
  
   }


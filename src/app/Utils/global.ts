import { environment } from '../../enviroments/enviroment.development';

export const API_ENDPOINTS = {
 
registration: environment.api_url +'api/Account/register',
login: environment.api_url +'api/Account/login'

}
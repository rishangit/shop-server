import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpCallService } from '../../../../shared/services/http-call.service';
import { LoginData } from '../../interfaces/login.interface';


@Injectable()
export class LoginService {

  constructor(
    private httpCallService:HttpCallService
  ) { }


  login(loginData: LoginData): Observable<any> {
    return this.httpCallService.post('login',loginData)
  }
  
}

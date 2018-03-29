import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { LoginData } from '../../interfaces/login.interface';
import { FormBuilder, Validator } from '@angular/forms';
import { LoginService } from './login.service';
import { Res } from '../../../../shared/classes/project';
import { ResType } from '../../../../shared/classes/enums';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginData: LoginData
  constructor(
    private loginService: LoginService,
    private router: Router
  ) {
    this.loginData = {};
  }

  ngOnInit() {
    this.loginData.unm = 'n.rishee@gmail.com';
    this.loginData.pss = '12345';
  }

  doLogin(event) {
    this.loginService.login(this.loginData).subscribe((res:Res) => {
      debugger
      if (res.typ == ResType.SUCCESS_OBJ) {
        this.router.navigate(['/home'])
      }
    })
  }

}

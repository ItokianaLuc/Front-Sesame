import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }

  constructor(private auth:AuthService, private router : Router){

  }

  username = "";
  password = "";
  errorMsg="";

  login() {
    if (this.username.trim().length === 0) {
      this.errorMsg= "Username requis"
    }
    else if (this.password.trim().length === 0) {
      this.errorMsg= "Password requis"
    }else{
      this.errorMsg="";
      let res = this.auth.login(this.username,this.password);
      if (res===200) {
        this.router.navigate(['home']);
      }
      if (res===403) {
        this.errorMsg="Username ou Password Invalide"
      }
    }
  }
}

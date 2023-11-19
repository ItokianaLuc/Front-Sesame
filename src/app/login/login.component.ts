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
      this.auth.login(this.username, this.password).subscribe(
        (res: any) => {
          console.log("res===>", res);
          console.log(res.status);
          if (res.email===this.username) {
            this.router.navigate(['home']);
          } else {
            this.errorMsg = "Nom d'utilisateur ou mot de passe invalide";
          }
        },
        (error) => {
          this.errorMsg="Erreur "+error.status
        }
      );
    }
  }
}

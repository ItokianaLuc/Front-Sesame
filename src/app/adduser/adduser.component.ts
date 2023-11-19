import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrl: './adduser.component.css'
})
export class AdduserComponent {

  constructor(private authService: AuthService, private router: Router) { }

  name = "";
  firstname = "";
  identification = "";
  password = "";
  role = "";
  email = "";
  phone = "";

  groupe="";
  ue="";

  ajouter() {
    this.authService.addUser(this.name, this.firstname, this.identification, this.password, this.role, this.email, this.phone).subscribe(
      (res: any) => {
        console.log(res);
        this.router.navigate(['home']);
      }
    );

  }

}

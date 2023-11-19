import { Component } from '@angular/core';
import { SesamienService } from '../service/sesamien.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-addsesamien',
  templateUrl: './addsesamien.component.html',
  styleUrl: './addsesamien.component.css'
})


export class AddsesamienComponent {

constructor(private sesamienService : SesamienService,private router : Router){}

  name="";
  firstname="";
  age=0;
  mention="";
  genre="";
  region="";
  promotion="";

  ajouter(){
    this.sesamienService.addSesamien(this.name,this.firstname,this.age,this.mention,this.genre,this.region,this.promotion).subscribe(
      (res: any) => {
        console.log(res);
      }
    );
    this.router.navigate(['home']);
  }

}

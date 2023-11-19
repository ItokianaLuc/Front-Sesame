import { Component, OnInit } from '@angular/core';
import { UeService } from '../service/ue.service';
import { CookieService } from 'ngx-cookie-service';
import { SesamienService } from '../service/sesamien.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent implements OnInit {

  tableauObjects = [
    { "name": "Note CC EC1" },
    { "name": "Note CC EC2" },
    { "name": "Note CC EC3" }
  ];

  user: any;
  listUe: any;

  sesamien:any;

  constructor(private ueService: UeService, private cookieService: CookieService, private sesamienService: SesamienService) { }

  ngOnInit(): void {
    this.getUeList();
    this.user = this.getConnectedUser();
    this.getSesamientList();
  }

  getConnectedUser() {
    const userData = this.cookieService.get('userData');
    return userData ? JSON.parse(userData) : null;
  }

  getUeList() {
    this.ueService.getListUe().subscribe(
      (data: any) => {
        this.listUe = data;
        console.log(data);
      });
    this.tableauObjects = this.listUe;
  }

  getSesamientList() {
    this.sesamienService.getListSesamien().subscribe(
      (data: any) => {
        this.sesamien = data;
      }
    )
  }

}

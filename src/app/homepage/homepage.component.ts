import { Component, OnInit } from '@angular/core';
import { UeService } from '../service/ue.service';

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

  listUe: any;

  constructor(private ueService: UeService) { }

  ngOnInit(): void {
    this.getUeList();
  }

  getUeList() {
    this.ueService.getListUe().subscribe(
      (data: any) => {
        this.listUe = data;
        console.log(data);
      });
    this.tableauObjects = this.listUe;
  }

}

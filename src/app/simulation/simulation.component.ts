import { Component, OnInit } from '@angular/core';
import { UeService } from '../service/ue.service';

@Component({
  selector: 'app-simulation',
  templateUrl: './simulation.component.html',
  styleUrl: './simulation.component.css'
})
export class SimulationComponent implements OnInit {
  tableauObjects = [
    { "name": "Note CC EC1"},
    { "name": "Note CC EC2"},
    { "name": "Note CC EC3"}
  ];

  listUe : any;
  
  constructor(private ueService: UeService){}
  ngOnInit(): void {
    this.getUeList();
  }

  selectedValue: string = 'L';
  onSelectionChange(event: any) {
    this.selectedValue = event.target.value;
    console.log('Valeur sélectionnée : ', this.selectedValue);
    this.tableauObjects = this.listUe.filter((item: { mention: string; }) => {
      return item.mention === this.selectedValue;
  });
  }

  getUeList(){
      this.ueService.getListUe().subscribe(
        (data:any) =>{
        this.listUe = data;
        console.log(data);
      });
      this.tableauObjects = this.listUe.filter((item: { mention: string; }) => {
        return item.mention === "L";
    });
  }
}

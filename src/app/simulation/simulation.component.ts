import { Component } from '@angular/core';

@Component({
  selector: 'app-simulation',
  templateUrl: './simulation.component.html',
  styleUrl: './simulation.component.css'
})
export class SimulationComponent {
  tableauObjects = [
    { "name": "Note CC EC1"},
    { "name": "Note CC EC2"},
    { "name": "Note CC EC3"}
  ];
}

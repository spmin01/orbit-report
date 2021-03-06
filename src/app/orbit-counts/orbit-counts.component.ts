import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {

  @Input() satellites: Satellite[];

  satelliteTypes = [
    "Space Debris",
    "Communication",
    "Probe",
    "Positioning",
    "Space Station",
    "Telescope"
  ];

  constructor() { }

  ngOnInit() {
  }

  getSatelliteCount(type: string): number {
    return this.satellites.filter(satellite => satellite.type === type).length;
  }

}

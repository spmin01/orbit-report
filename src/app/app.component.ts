import { Component } from '@angular/core';
import { Satellite } from './satellite';
import { SourceListMap } from 'source-list-map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'orbit-report';
  sourceList: Satellite[];

  constructor() {
    this.sourceList = [];
    let satellitesUrl = 'https://handlers.education.launchcode.org/static/satellites.json';

    window.fetch(satellitesUrl).then(function(response) {
      response.json().then(function(data) {
        for(let i = 0; i < data.satellites.length; i++) {
          let newSatellite = new Satellite(data.satellites[i].name, data.satellites[i].type, data.satellites[i].launchDate, data.satellites[i].orbitType, data.satellites[i].operational);
          this.sourceList.push(newSatellite);
        }
      }.bind(this));
    }.bind(this));
  }
}

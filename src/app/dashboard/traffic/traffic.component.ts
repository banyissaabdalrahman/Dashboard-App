import { Component } from '@angular/core';

import { TrafficService } from '../../services/traffic.service';

@Component({
  selector: 'app-traffic',
  standalone: true,
  imports: [],
  templateUrl: './traffic.component.html',
  styleUrl: './traffic.component.css'
})
export class TrafficComponent {

  constructor(private trafficservice: TrafficService){}
  
  dummyTrafficData = this.trafficservice.getTrafficData();


  maxTraffic = this.trafficservice.calculateMaxTraffic();

}

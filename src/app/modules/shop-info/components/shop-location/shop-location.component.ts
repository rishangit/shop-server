import { Component, OnInit ,ElementRef, EventEmitter,  NgZone, ViewChild} from '@angular/core';
import { AgmCoreModule, LatLngLiteral, MapsAPILoader } from '@agm/core';
import { FormControl } from '@angular/forms';

import { AgmMap } from '@agm/core';
declare var google: any;
@Component({
  selector: 'shop-location',
  templateUrl: './shop-location.component.html',
  styleUrls: ['./shop-location.component.css']
})
export class ShopLocationComponent implements OnInit {
  @ViewChild(AgmMap)
  agmMap: AgmMap
  address:string;
  lat: number = 51.678418;
  lng: number = 7.809007;
  zoom:number;

  constructor( 
) { }

  ngOnInit() {
    this.agmMap.triggerResize();

  }

}



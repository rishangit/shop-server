import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { ISubscription } from "rxjs/Subscription";
//const
import { SubHeader } from '../classes/project';

@Injectable()
export class ProjectService {
  //sub header
  subscriptionAddNew: ISubscription;
  subHeader: SubHeader = new SubHeader;
  eventAddNewCallback = new Subject<any[]>();
  eventAddNewCallback$ = this.eventAddNewCallback.asObservable();
  //end - sub header
  //slider
  sliderShow: boolean = false;
  subscriptionSlider: ISubscription;
  eventSliderCallback = new Subject<any>();
  eventSliderCallback$ = this.eventSliderCallback.asObservable();
  //end - slider
  constructor() {

  }

}

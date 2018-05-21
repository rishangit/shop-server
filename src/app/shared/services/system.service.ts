import { Injectable } from '@angular/core';
import { ISubscription } from 'rxjs/Subscription';
import { SubHeader, Slider } from '../classes/project';
import { Subject } from 'rxjs';

@Injectable()
export class SystemService {

  //sub header
  subscriptionAddNew: ISubscription;
  subHeader: SubHeader = new SubHeader;
  eventAddNewCallback = new Subject<any[]>();
  eventAddNewCallback$ = this.eventAddNewCallback.asObservable();
  //end - sub header
  //slider
  sliderShow: boolean = false;
  subscriptionSlider: ISubscription;
  eventSliderCallback = new Subject<Slider>();
  eventSliderCallback$ = this.eventSliderCallback.asObservable();
  //end - slider
  constructor() {

  }

}

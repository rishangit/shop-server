import { Component, OnInit } from '@angular/core';

//service
import { SystemService } from '../../services/system.service';

@Component({
  selector: 'app-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.css']
})
export class SubHeaderComponent implements OnInit {

  constructor(
    public systemService: SystemService
  ) { }

  ngOnInit() {
    
  }

  evBuyAdmin_click(){


  }

  evntAddNew_click(){
    let obj:any = {}
    this.systemService.eventAddNewCallback.next(obj)
  }
}

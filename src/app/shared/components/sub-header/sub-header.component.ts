import { Component, OnInit } from '@angular/core';

//service
import { ProjectService } from '../../services/project.service';
@Component({
  selector: 'app-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.css']
})
export class SubHeaderComponent implements OnInit {

  constructor(public projectService: ProjectService) { }

  ngOnInit() {
    
  }

  evBuyAdmin_click(){


  }

  evntAddNew_click(){
    let obj:any = {}
    this.projectService.eventAddNewCallback.next(obj)
  }
}

import { Component, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';

import '../../../../../assets/plugins/bower_components/jquery-wizard-master/dist/jquery-wizard.min.js'

//services
import { ProjectService } from '../../../../shared/services/project.service';

declare var $: any;
declare var wizard: any;
declare var swal: any;
@Component({
  //selector: 'app-shop-info-main',
  templateUrl: './shop-info-main.component.html',
  styleUrls: ['./shop-info-main.component.css',
    '../../../../../assets/plugins/bower_components/jquery-wizard-master/css/wizard.css'
  ],
  encapsulation: ViewEncapsulation.None
})
export class ShopInfoMainComponent implements OnInit {

  constructor(public projectService: ProjectService) {
    this.projectService.subHeader.btnAddNew = true;
    if (this.projectService.subscriptionAddNew != undefined)
      this.projectService.subscriptionAddNew.unsubscribe();
    this.projectService.subscriptionAddNew = this.projectService.eventAddNewCallback$.subscribe(object => {
      this.addNewShop();
    })
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    $('#exampleBasic2').wizard({
      onFinish: function () {
        swal("Message Finish!", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lorem erat eleifend ex semper, lobortis purus sed.");
      }
    });
  }

  addNewShop() {
    alert('addNewShop')
  }
}

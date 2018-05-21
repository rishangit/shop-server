import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//services

import { SystemService } from '../../../../shared/services/system.service';

@Component({
  selector: 'app-product-main',
  templateUrl: './product-main.component.html',
  styleUrls: ['./product-main.component.css']
})
export class ProductMainComponent implements OnInit {

  constructor(
    private systemService: SystemService,
    private router: Router
  ) {
    this.systemService.subHeader.btnAddNew = true;
    if(this.systemService.subscriptionAddNew != undefined)
    this.systemService.subscriptionAddNew.unsubscribe();
    this.systemService.subscriptionAddNew = this.systemService.eventAddNewCallback$.subscribe(object => {
      this.addNewProduct();
    })
  }

  ngOnInit() {

  }

  addNewProduct() {
    this.router.navigate(['/product/newproduct'])
  }

}

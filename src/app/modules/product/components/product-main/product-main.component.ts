import { Component, OnInit } from '@angular/core';


//services
import { ProjectService } from '../../../../shared/services/project.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-main',
  templateUrl: './product-main.component.html',
  styleUrls: ['./product-main.component.css']
})
export class ProductMainComponent implements OnInit {

  constructor(private projectService: ProjectService,
    private router: Router) {
    this.projectService.subHeader.btnAddNew = true;
    if(this.projectService.subscriptionAddNew != undefined)
    this.projectService.subscriptionAddNew.unsubscribe();
    this.projectService.subscriptionAddNew = this.projectService.eventAddNewCallback$.subscribe(object => {
      this.addNewProduct();
    })
  }

  ngOnInit() {

  }

  addNewProduct() {
    this.router.navigate(['/product/newproduct'])
  }

}

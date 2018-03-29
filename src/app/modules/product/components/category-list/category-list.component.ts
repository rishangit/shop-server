import { Component, OnInit } from '@angular/core';
import { ProductCatagory } from '../../../../shared/classes/common';
import { SearchParam, Res } from '../../../../shared/classes/project';
import { ProductService } from '../../product.service';
import { ResType } from '../../../../shared/classes/enums';

@Component({
  selector: 'category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  categoryQuery: string = "";
  searchParamCatagory: SearchParam;
  catagoryList: ProductCatagory[] = [];
  catagory: ProductCatagory
  constructor(private productService: ProductService) {

  }

  ngOnInit() {
    this.eventCategorySearch_click();
  }

  eventCategorySearch_click() {
    this.searchParamCatagory = new SearchParam();
    this.searchParamCatagory.query = this.categoryQuery
    this.productService.listProductCatagory(this.searchParamCatagory).subscribe((res: Res) => {
      switch (res.typ) {
        case ResType.SUCCESS_LIST:
          this.catagoryList = res.lst;
          break;
        case ResType.ERROR:
          alert("Error on Retrieving Product Catagory")
          break;
      }
    })
  }
}

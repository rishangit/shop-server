import { Component, OnInit } from '@angular/core';
import { HttpCallService } from '../../../../shared/services/http-call.service';
import { ProductService } from '../../product.service';
import { SearchParam, Res } from '../../../../shared/classes/project';
import { Product } from '../../../../shared/classes/common';
import { ResType } from '../../../../shared/classes/enums';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList: Product[] = [];
  searchParam: SearchParam = new SearchParam();
  constructor(
    private httpCallService: HttpCallService,
    private productService: ProductService
  ) { 
    this.searchParam.sort = { 'mfd': 1, 'nme': 1 }
  }

  ngOnInit() {
    this.getProductList();
  }


  getProductList() {  
    this.productService.listProduct(this.searchParam).subscribe((res:Res) => {
      if (res.typ == ResType.SUCCESS_LIST) {
        this.productList = res.lst;
      }
    })
  }

  prev_click(){
    this.searchParam.page--;
    this.getProductList();
  }

  next_click(){
    this.searchParam.page++;
    this.getProductList();
  }
}

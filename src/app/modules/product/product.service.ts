import { Injectable } from '@angular/core';
import { HttpCallService } from '../../shared/services/http-call.service';
import { Observable } from 'rxjs';
import { ProductCatagory, Product, ProductUnit, Manufacture } from '../../shared/classes/common';
import { SearchParam } from '../../shared/classes/project';

@Injectable()
export class ProductService {

  constructor(
    private httpCallService:HttpCallService
  ) { }


  saveProduct(product: Product): Observable<any> {
    return this.httpCallService.post('saveproduct',product)
  }


  listProduct(searchParam: SearchParam): Observable<any> {
    alert(JSON.stringify(searchParam))
    return this.httpCallService.post('listproduct',searchParam)
  }

  saveProductCatagory(productCatagory: ProductCatagory): Observable<any> {
    return this.httpCallService.post('save_product_catagory',productCatagory)
  }

  listProductCatagory(searchParam: SearchParam): Observable<any> {
    return this.httpCallService.post('list_product_catagory',searchParam)
  }

  saveProductUnit(productUnit: ProductUnit): Observable<any> {
    return this.httpCallService.post('save_product_unit',productUnit)
  }

  listProductUnit(searchParam: SearchParam): Observable<any> {
    return this.httpCallService.post('list_product_unit',searchParam)
  }

  saveProductManufacture(manufacture: Manufacture): Observable<any> {
    return this.httpCallService.post('save_product_manufacture',manufacture)
  }

  listProductManufacture(searchParam: SearchParam): Observable<any> {
    return this.httpCallService.post('list_product_manufacture',searchParam)
  }
}

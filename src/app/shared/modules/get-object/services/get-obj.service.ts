import { Injectable } from '@angular/core';
import { HttpCallService } from '../../../services/http-call.service';
import { ProductCatagory, Manufacture, ProductUnit } from '../../../classes/common';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GetObjService {

  constructor(private httpCallService: HttpCallService) { }

  getProductCatagory(productCatagory: ProductCatagory): Observable<any> {
    return this.httpCallService.post('get_product_catagory', productCatagory)
  }

  getProductManufacture(manufacture: Manufacture): Observable<any> {
    return this.httpCallService.post('get_product_manufacture', manufacture);
  }

  getProductUnit(productUnit: ProductUnit): Observable<any> {
    return this.httpCallService.post('get_product_unit', productUnit);
  }
}

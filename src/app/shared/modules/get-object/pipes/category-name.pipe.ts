import { Pipe, PipeTransform } from '@angular/core';
import { GetObjService } from '../services/get-obj.service';
import { Res } from '../../../classes/project';
import { ResType } from '../../../classes/enums';
import { ProductCatagory } from '../../../classes/common';

@Pipe({
  name: 'categoryName'
})
export class CategoryNamePipe implements PipeTransform {

  constructor(private getObjService: GetObjService) { }

  transform(value: any, args?: any): any {

    return new Promise((resolve, reject) => {
      let nme: string;
      nme = localStorage.getItem('categoryName_' + value);
      if (nme != null)
        resolve(nme);
      else {
        this.getObjService.getProductCatagory({ _id: value }).subscribe((res: Res) => {
          switch (res.typ) {
            case ResType.SUCCESS_OBJ:
              let productCatagory: ProductCatagory = <ProductCatagory>res.obj;
              nme = productCatagory.nme;
              localStorage.setItem('categoryName_' + value, nme);
              break
            default:
              nme = "Name Not found";
              break
          }
          resolve(nme);
        })
      }
    })
  }
}

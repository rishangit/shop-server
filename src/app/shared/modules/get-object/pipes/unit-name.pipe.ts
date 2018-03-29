import { Pipe, PipeTransform } from '@angular/core';
import { GetObjService } from '../services/get-obj.service';
import { Res } from '../../../classes/project';
import { ResType } from '../../../classes/enums';
import { ProductUnit } from '../../../classes/common';

@Pipe({
  name: 'unitName'
})
export class UnitNamePipe implements PipeTransform {

  constructor(private getObjService: GetObjService) { }

  transform(value: any, args?: any): any {

    return new Promise((resolve, reject) => {
      let nme: string;
      nme = localStorage.getItem('unitName_' + value);
      if (nme != null)
        resolve(nme);
      else {
        this.getObjService.getProductUnit({ _id: value }).subscribe((res: Res) => {
          debugger
          let nme: string;
          switch (res.typ) {
            case ResType.SUCCESS_OBJ:
              let productUnit: ProductUnit = <ProductUnit>res.obj;
              nme = productUnit.nme;
              localStorage.setItem('unitName_' + value, nme);
              break;
            default:
              nme = "Name Not found";
              break
          }
          resolve(nme);
        })
      }
    });
  }
}
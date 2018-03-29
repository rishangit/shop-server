import { Pipe, PipeTransform } from '@angular/core';
import { GetObjService } from '../services/get-obj.service';
import { ResType } from '../../../classes/enums';
import { Manufacture } from '../../../classes/common';
import { Res } from '../../../classes/project';

@Pipe({
  name: 'manufacturedName'
})
export class ManufacturedNamePipe implements PipeTransform {

  constructor(private getObjService: GetObjService) { }

  transform(value: any, args?: any): any {
    return new Promise((resolve, reject) => {
      let nme: string;
      nme = localStorage.getItem('manufacturedName_' + value);
      if (nme != null)
        resolve(nme);
      else {
        this.getObjService.getProductManufacture({ _id: value }).subscribe((res: Res) => {
          switch (res.typ) {
            case ResType.SUCCESS_OBJ:
              let manufacture: Manufacture = <Manufacture>res.obj;
              nme = manufacture.mfd;
              localStorage.setItem('manufacturedName_' + value, nme);
              break;
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

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetObjService } from './services/get-obj.service';
import { CategoryNamePipe } from './pipes/category-name.pipe';
import { ManufacturedNamePipe } from './pipes/manufactured-name.pipe';
import { UnitNamePipe } from './pipes/unit-name.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CategoryNamePipe, ManufacturedNamePipe, UnitNamePipe],
  exports: [CategoryNamePipe, ManufacturedNamePipe, UnitNamePipe],
  providers: [GetObjService]
})
export class GetObjectModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderMainComponent } from './components/slider-main/slider-main.component';
import { NewCategoryComponent } from '../../../modules/product/components/new-category/new-category.component';
import { FormElementModule } from '../form-element/form-element.module';
import { NewUnitComponent } from '../../../modules/product/components/new-unit/new-unit.component';
import { NewManufactureComponent } from '../../../modules/product/components/new-manufacture/new-manufacture.component';
import { CategoryListComponent } from '../../../modules/product/components/category-list/category-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormElementModule
  ],
  declarations: [
    SliderMainComponent, 
    NewCategoryComponent,
    NewUnitComponent,
    NewManufactureComponent,
    CategoryListComponent,
  ],
  exports:[
    SliderMainComponent, 
    NewCategoryComponent,
    NewUnitComponent,
    NewManufactureComponent,
    CategoryListComponent],
  entryComponents: [
    NewCategoryComponent,
    NewUnitComponent,
    NewManufactureComponent]
})
export class SliderModule { }

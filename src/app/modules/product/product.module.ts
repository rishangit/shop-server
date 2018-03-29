import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductMainComponent } from './components/product-main/product-main.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//modules
import { SharedCommonModule } from '../../shared/modules/shared-common/shared-common.module';
import { NewItemComponent } from './components/new-item/new-item.component';
//services
import { ProductService } from './product.service';
import { HttpCallService } from '../../shared/services/http-call.service';
import { ProductListComponent } from './components/product-list/product-list.component';
import { SliderModule } from '../../shared/modules/slider/slider.module';
import { FormElementModule } from '../../shared/modules/form-element/form-element.module';
import { GetObjectModule } from '../../shared/modules/get-object/get-object.module';
// import { CategoryListComponent } from './components/category-list/category-list.component';

export const productRoutes: Routes = [
  {
    path: '', component: ProductMainComponent,
    children: [
      { path: '',   redirectTo: 'list', pathMatch: 'prefix' },
      { path: 'list', component: ProductListComponent },
      { path: 'newproduct', component: NewItemComponent }
    ]
  },
  /* configure routes here */
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(productRoutes),
    FormsModule,
    ReactiveFormsModule,
    SharedCommonModule,
    SliderModule,
    FormElementModule,
    GetObjectModule
  ],
  exports: [SharedCommonModule, SliderModule],
  declarations: [ProductMainComponent, NewItemComponent, ProductListComponent],
  providers: [HttpCallService, ProductService],
  entryComponents:[]
})
export class ProductModule { }

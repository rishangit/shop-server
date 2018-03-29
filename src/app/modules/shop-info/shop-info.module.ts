import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopInfoMainComponent } from './components/shop-info-main/shop-info-main.component';
import { RouterModule, Routes } from '@angular/router';
import { ShopLocationComponent } from './components/shop-location/shop-location.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgmCoreModule, GoogleMapsAPIWrapper  } from '@agm/core';
import { ShopListComponent } from './components/shop-list/shop-list.component';
import { ShopInfoService } from './services/shop-info.service';
import { HttpCallService } from '../../shared/services/http-call.service';

export const shopInfoRoutes: Routes = [
  {path:'', component:ShopInfoMainComponent,
  children: [
    { path: '', redirectTo: 'list', pathMatch: 'prefix' },
    { path: 'list', component: ShopListComponent },
    // { path: 'newshop', component: NewShopComponent }
  ]
}
  /* configure routes here */
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(shopInfoRoutes),
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCQoUOMQsxvGcsn1UbyL8EQ_Fvyy9ShQTQ',
      libraries: ['places']
    })
  ],
  declarations: [ShopInfoMainComponent, ShopLocationComponent, ShopListComponent],
  providers:[HttpCallService, ShopInfoService,]
})
export class ShopInfoModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//components
import { HeaderComponent } from '../../components/header/header.component';
import { SubHeaderComponent } from '../../components/sub-header/sub-header.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HeaderComponent,
    SubHeaderComponent],
  exports: [
    HeaderComponent,
    SubHeaderComponent],
  providers: [],
})
export class SharedCommonModule { }

import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { SliderBase } from '../../../../shared/modules/slider/classes/slider-base';
import { FormElement, FormElementType, FormText, FormTitle, FormTextarea, FormButton, FormCustomElement } from '../../../../shared/modules/form-element/classes/formElement';
import { ProductCatagory } from '../../../../shared/classes/common';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-new-category',
  templateUrl: './new-category.component.html',
  styleUrls: ['./new-category.component.css']
})
export class NewCategoryComponent implements OnInit {
  @Input() data: any;
  formElementType = FormElementType;
  formElementList: FormElement[] = [
    new FormTitle({ label: "Catagory Details" }),
    new FormText({ label: "Catagory Name", propName: 'nme', name: "name", class: ['col-md-12'] }),
    new FormTextarea({ label: "Description", propName: 'des', name: "des", class: ['col-md-12'] }),
    new FormButton({ label: "Add", name: "btnadd", class: ['btn-info col-md-2 m-l-15'] })
  ];
  productCatagory: ProductCatagory = { nme: '', des: '' };
  constructor() {
  }
  ngOnInit() {

  }

  ngAfterViewInit() {

  }

  eventChangeFormData(formElement: FormElement) {
    switch (formElement.name) {
      case 'btnadd':
        alert(JSON.stringify(this.productCatagory));
        this.data.callBack(this.productCatagory)
        break;
    }
  }
}

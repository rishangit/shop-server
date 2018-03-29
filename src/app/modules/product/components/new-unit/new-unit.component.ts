import { Component, OnInit, Input } from '@angular/core';
import { FormElementType, FormTitle, FormText, FormTextarea, FormButton, FormElement } from '../../../../shared/modules/form-element/classes/formElement';
import { ProductUnit } from '../../../../shared/classes/common';

@Component({
  selector: 'app-new-unit',
  templateUrl: './new-unit.component.html',
  styleUrls: ['./new-unit.component.css']
})
export class NewUnitComponent implements OnInit {
  @Input() data: any;
  formElementType = FormElementType;
  formElementList: FormElement[] = [
    new FormTitle({ label: "Unit Details" }),
    new FormText({ label: "Unit", propName: 'nme', name: "name", class: ['col-md-6'] }),
    new FormTextarea({ label: "Description", propName: 'des', name: "des", class: ['col-md-12'] }),
    new FormButton({ label: "Add", name: "btnadd", class: ['btn-info col-md-2 m-l-15'] })
  ];
  productUnit: ProductUnit = { nme: '', des: '' };
  constructor() { }

  ngOnInit() {
  }

  eventChangeFormData(formElement: FormElement) {
    switch (formElement.name) {
      case 'btnadd':
        alert(JSON.stringify(this.productUnit));
        this.data.callBack(this.productUnit)
        break;
    }
  }

}

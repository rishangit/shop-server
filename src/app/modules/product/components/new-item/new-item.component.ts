import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validator } from '@angular/forms';
import { Router } from '@angular/router';
//Objects
import { Product, ProductCatagory, ProductUnit, Manufacture } from '../../../../shared/classes/common';
//components
import { Slider, SearchParam, Res } from '../../../../shared/classes/project';
import { NewCategoryComponent } from '../new-category/new-category.component';
//Services
import { ProductService } from '../../product.service';
import { FormElementType, FormElement, FormTitle, FormText, FormTextarea, FormButton, FormCustomElement } from '../../../../shared/modules/form-element/classes/formElement';
import { NewUnitComponent } from '../new-unit/new-unit.component';
import { NewManufactureComponent } from '../new-manufacture/new-manufacture.component';
import { ResType } from '../../../../shared/classes/enums';
import { SystemService } from '../../../../shared/services/system.service';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.css'],

})

export class NewItemComponent implements OnInit {
  product: Product = new Product;
  categoryQuery: string = "";
  catagoryList: ProductCatagory[] = [];
  selectedCatagory: ProductCatagory;
  searchParamCatagory: SearchParam = new SearchParam();

  unitQuery: string = "";
  unitList: ProductUnit[] = [];
  selectedUnit: ProductUnit;
  searchParamUnit: SearchParam = new SearchParam();

  manufactureQuery: string = "";
  manufactureList: Manufacture[] = [];
  selectedManufacture: Manufacture;
  searchParamManufacture: SearchParam = new SearchParam();


  formElementType = FormElementType;
  formElementList: FormElement[] = [
    new FormTitle({ label: "about Product" }),
    new FormCustomElement({ label: "Catagory", propName: 'cat', name: "catagory", class: ['col-md-6'] }),
    new FormCustomElement({ label: "Manufactured by", propName: 'mfd', name: "manufacture", class: ['col-md-6'] }),
    new FormText({ label: "Item", propName: 'nme', name: "name", class: ['col-md-6'] }),
    new FormText({ label: "Sub Item", propName: 'sub', name: "sub", class: ['col-md-6'] }),
    new FormText({ label: "Quantity of item", propName: 'qty', name: "quantity", class: ['col-md-3'] }),
    //new FormText({ label: "Unit", propName: 'qtu', name: "unit", class: ['col-md-3'] }),
    new FormCustomElement({ label: "Unit", propName: 'qtu', name: "unit", class: ['col-md-3'] }),
    new FormTextarea({ label: "Product Description", propName: 'des', name: "description", class: ['col-md-12 clearfix'] }),
    new FormText({ label: "Item Code", propName: 'cod', name: "code", class: ['col-md-6'] }),
    new FormButton({ label: "Add", name: "btnadd", class: ['btn-info col-md-2 m-l-15 clear-both'] }), new FormCustomElement({ label: "Add", name: "btnadd", class: ['btn-info col-md-2 m-l-15'], ngTempateName: "custom1" }),
  ];

  constructor(
    private productService: ProductService,
    private systemService: SystemService,
    private router: Router
  ) {
    this.newProduct();
    this.product.cod
  }

  ngOnInit() {
  }

  newProduct() {

  }

  eventSave_click() {
    this.productService.saveProduct(this.product).subscribe((res: Res) => {
      switch (res.typ) {
        case ResType.SUCCESS_OBJ:
          alert("Product saved Successed");
          this.newProduct();
          break;
        case ResType.ERROR:
          alert("Error on saving Product")
          break;
      }
    })
  }

  eventAddNew_click() {
    let slider: Slider = new Slider();
    slider.component = NewCategoryComponent;
    slider.object = { name: 'Rishan' };
    slider.title = "Add New Category";
    slider.callBack = (obj?: any) => {
      this.slideCallBack(obj)
    }
    this.systemService.eventSliderCallback.next(slider)
  }

  eventClose_click() {
    this.router.navigate(['/product/list'])
  }

  slideCallBack(productCatagory: ProductCatagory) {
    this.productService.saveProductCatagory(productCatagory).subscribe((res: Res) => {
      switch (res.typ) {
        case ResType.SUCCESS_OBJ:
          alert('Product Catagory Saved Succeed')
          break;
        case ResType.ERROR:
          alert('Error on Saving Product')
          break;
      }
    })
  }


  eventChangeFormData(formElement: FormElement) {
    switch (formElement.name) {
      case "btnadd":
        this.saveProduct();
        break;
    }
  }

  saveProduct() {
    this.productService.saveProduct(this.product).subscribe((res: Res) => {
      switch (res.typ) {
        case ResType.SUCCESS_OBJ:
          alert("Product Saved");
          break;
        case ResType.ERROR:
          alert("Error on Saving Product")
          break;
      }
      this.newProduct();
    })
  }

  eventCategorySearch_click() {
    this.searchParamCatagory = new SearchParam();
    this.searchParamCatagory.query = this.categoryQuery
    this.productService.listProductCatagory(this.searchParamCatagory).subscribe((res: Res) => {
      switch (res.typ) {
        case ResType.SUCCESS_LIST:
          this.catagoryList = res.lst;
          break;
        case ResType.ERROR:
          alert("Error on Retrieving Products")
          break;
      }
    })
  }

  eventCategory_click(productCatagory: ProductCatagory) {
    this.product.cat = productCatagory._id;
    this.selectedCatagory = productCatagory;
    this.categoryQuery = productCatagory.nme;
  }

  eventAddNewUnit_click() {
    let slider: Slider = new Slider();
    slider.component = NewUnitComponent;
    slider.object = {};
    slider.title = "Add New Unit";
    slider.callBack = (obj?: any) => {
      this.unitSlideCallBack(obj)
    }
    this.systemService.eventSliderCallback.next(slider)
  }

  eventUnit_click(unit: ProductUnit) {
    this.product.qtu = unit._id;
    this.selectedUnit = unit;
    this.unitQuery = unit.nme;
  }

  eventUnitSearch_click() {
    this.searchParamUnit = new SearchParam();
    this.searchParamUnit.query = this.unitQuery
    this.productService.listProductUnit(this.searchParamUnit).subscribe((res: Res) => {
      switch (res.typ) {
        case ResType.SUCCESS_LIST:
          this.unitList = res.lst;
          break;
        case ResType.ERROR:
          alert("Error on Retrieving Units");
          break;
      }
    })
  }

  unitSlideCallBack(unit: ProductUnit) {
    this.productService.saveProductUnit(unit).subscribe((res: Res) => {
      switch (res.typ) {
        case ResType.SUCCESS_OBJ:
          alert('Product Unit Saved Success')
          break;
        case ResType.ERROR:
          alert("Error on saving unit")
          break;
      }
    })
  }

  eventAddNewManufacture_click() {
    let slider: Slider = new Slider();
    slider.component = NewManufactureComponent;
    slider.object = {};
    slider.title = "Add New Manufacture";
    slider.callBack = (obj?: any) => {
      this.manufactureSlideCallBack(obj)
    }
    this.systemService.eventSliderCallback.next(slider)
  }

  manufactureSlideCallBack(manufacture: Manufacture) {
    this.productService.saveProductManufacture(manufacture).subscribe((res: Res) => {
      switch (res.typ) {
        case ResType.SUCCESS_LIST:
          this.manufactureList = res.lst;
          break;
        case ResType.ERROR:
          alert("Error on Retrieving Product Manufacture")
          break;
      }
    })
  }

  eventManufacturedSearch_click() {
    this.searchParamManufacture = new SearchParam();
    this.searchParamManufacture.query = this.manufactureQuery
    this.productService.listProductManufacture(this.searchParamManufacture).subscribe((res: Res) => {
      switch (res.typ) {
        case ResType.SUCCESS_LIST:
          this.manufactureList = res.lst;
          break;
        case ResType.ERROR:
          alert("Error on Retrieving Product Manufacture")
          break;
      }
    })
  }

  eventManufactured_click(manufacture: Manufacture) {
    this.product.mfd = manufacture._id;
    this.selectedManufacture = manufacture;
    this.manufactureQuery = manufacture.mfd;
  }
}

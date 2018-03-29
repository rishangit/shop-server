import { Component, OnInit } from '@angular/core';
import { HttpCallService } from '../../../../shared/services/http-call.service';
import { Res, SearchParam } from '../../../../shared/classes/project';
import { ResType } from '../../../../shared/classes/enums';
import { ShopInfoService } from '../../services/shop-info.service';
import { ShopInfo } from '../../../../shared/classes/common';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.css']
})
export class ShopListComponent implements OnInit {

  shopInfoList: ShopInfo[] = []
  constructor(
    private httpCallService: HttpCallService,
    private shopService: ShopInfoService
  ) { }

  ngOnInit() {
    this.getShopList();
  }

  getShopList() {
    let searchParam: SearchParam = new SearchParam();
    this.shopService.listShops(searchParam).subscribe((res: Res) => {
      if (res.typ == ResType.SUCCESS_LIST) {
        this.shopInfoList = res.lst;
      }
    })
  }

}
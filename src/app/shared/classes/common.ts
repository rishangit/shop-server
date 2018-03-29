import {UserType } from "./enums";
//A
//B
//C
//D
//E
//F
//G
export class GeoLocation {
    type?: GeoLocationType;
    coordinates?: number[] = [];
}
export enum GeoLocationType {
    Point = 'Point',
    LineString = "LineString",
    Polygon = "Polygon",
    MultiPoint = "MultiPoint",
    MultiLineString = "MultiLineString"
}
//H
//I
//J
//K
//L
//M
export class Manufacture {
    _id?: string;
    mfd?:string; // manufactured by
    mfa?:string; //Manufacture address
    mfc?:string; //Manufacture contact
    dis?:string; //distributer name
    dia?:string;// distributer adderss
    dic?:string;// distributer contact
}
//N
//O
//P
export class Product {
    _id?: string;
    nme?: string; //Name
    sub?: string; //sub Name
    mfd?: string; // manufactured by
    qty?: string; //quantity
    qtu?: string; //quantity unit
    cat?: string;// Catagory
    des?: string;// description
    cod?: string; //Code
}
export class ProductCatagory {
    _id?: string;
    nme?: string; //Name
    des?: string;// description
}
export class ProductUnit {
    _id?: string;
    nme?: string; //Name
    des?: string;// description
}
//Q
//R
//S
export class ShopInfo {
    nme?: string; // name
    ads?: string;
    div?: string;
    ara?: string;
    zom?: number;
    cat?: string;
    img?: string;
    tel?: string;
    location?: GeoLocation = {};
    constructor() {
        this.location.type = GeoLocationType.Point;
        this.location.coordinates = [];
    }
}
//T
//U
export class User {
    fnm?: string;
    lnm?: string;
    unm?: string;
    eml?: string;
    pss?: string;
    img?: string;
    typ?: UserType;
}
//V
//W
//X
//Y
//Z
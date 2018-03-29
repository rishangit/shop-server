import { QuantityUnits } from "./enums";

export interface PropNames { 
    //A
    ads?:string;// adress
    //B
    buy?:number; //Buying Price
    //C
    cat?; string;// Catagory
    cod?:string; //Code
    //D
    des:string; //description
    //E
    eml:string;// email
    epr?:string; //Expiration date
    //F
    fnm:string; //first name;
    //G
    //H
    //I
    img:string;// image ID
    //J
    //K
    //L
    lnm:string; //last name
    //M
    mfd:string; // manufactured by
    mft?: string; // Manufacture date
    //N
    nme:string;// name
    //O
    //P
    prd?: string; //Product 
    pss:string;// password   
    //Q
    qtu: QuantityUnits; //quantity unit
    qty: string; //quantity
    //R
    //S
    sel?: number ; //Selling Prce
    //T
    tag: string[]; //tags
    typ:number;// type
    //U
    unm:string; //user name
    //V
    //W
    web: string; // web address
    //X
    //Y
    //Z
}
import { QuantityUnits } from '../const/enums';

export class Product {
    nme?: string; //Name
    mfd: string; // manufactured by
    qty?: string; //quantity
    qtu?: QuantityUnits; //quantity unit
    cat?: string;// Catagory
    des?: string;// description
    cod?: string; //Code
}

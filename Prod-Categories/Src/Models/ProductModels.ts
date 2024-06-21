import { Request } from "express"

export interface ProductRequest extends Request{
body:{
    TITLE:string
}
}

export interface Product {
    Id:string
    TITLE:string
}
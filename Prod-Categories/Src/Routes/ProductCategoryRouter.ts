import { Router } from "express";
import { addProductCategory, getProductCategories,getProductCategory} from "../Controllers/ProductCategory";


const   ProductCategoryRouter = Router()

ProductCategoryRouter.post("",addProductCategory)
ProductCategoryRouter.get("", getProductCategories)
ProductCategoryRouter.get("/:id", getProductCategory)
export default ProductCategoryRouter
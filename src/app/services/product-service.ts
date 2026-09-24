import { Service } from '@angular/core';
import { Product } from '../classes/IProduct';

@Service()
export class ProductService {
    products: Product[]=
      [
        {id:1, name:"Iphone 18", price: 100, image: "https://cdn2.fptshop.com.vn/unsafe/750x0/filters:format(webp):quality(75)/iphone_18_pro_do_4f85943d2c.png"},
        {id:2, name:"Samsung Galaxy S21", price: -200, image:"https://dienthoaigiakho.vn/_next/image?url=https%3A%2F%2Fcdn.dienthoaigiakho.vn%2Fphotos%2F1757391729431-SAMSUNG-S25-FE-15.jpg&w=1080&q=75"},
        {id:1, name:"Xiaomi Mi 11", price: 300, image:"https://bizweb.dktcdn.net/100/506/962/products/mi-11-ultra-tra-ng.jpg?v=1715184915370"},
        {id:1, name:"Macbook Pro 2", price: -400, image:"https://macstores.vn/wp-content/uploads/2023/01/macbook-pro-m2-pro-silver.jpg"},
        {id:1, name:"Lenovo Fit", price: 500, image:"https://cdn2.fptshop.com.vn/unsafe/750x0/filters:format(webp):quality(75)/lenovo_v15_g5_irl_xam_02_2ed6e12652.png"},
      ]
    constructor(){}
    getProductList()
    {
        return this.products
    }
    filterProductList(minPrice:number, maxPrice:number)
    {
      return this.products.filter(p=>p.price>=minPrice &&
        p.price<=maxPrice
      )
    }
}

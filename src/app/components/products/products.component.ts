import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public productList:any
  constructor(private api: ApiService, private cartService:CartService) { }

  ngOnInit(): void {
    this.api.getProduct().subscribe(res=>{
      this.productList=res;
      
      this.productList.forEach((productItem:any)=>{
        Object.assign(productItem,{quantity:1,total:productItem.price});
    });


   
    })
  }



  addProductToCart(productItem:any){
    this.cartService.addToCart(productItem);
 
  }

}

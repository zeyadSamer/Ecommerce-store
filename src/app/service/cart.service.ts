import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
 public cartItemList:any[]=[]
 public productList=new BehaviorSubject<any>([]);
  constructor() { }

  getProduct(){

    return  this.productList.asObservable();
  }


  setProduct(product:any){
    this.cartItemList.push(...product);
    this.productList.next(product);
  }
  
  addToCart(product:any):void{

    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
    console.log(this.cartItemList);
  }
  getTotalPrice():number {

    let totalPrice=0;
    this.cartItemList.map((cartItem:any)=>{ 
      totalPrice+=cartItem.total;
      console.log(this.cartItemList);
      

    })

    return totalPrice;
  }




removeCartItem(product:any){

  this.cartItemList.map((cartItem:any,index:any)=>{


    if(product.id===cartItem.id){
      this.cartItemList.splice(index,1)
    }

  })

  this.productList.next(this.cartItemList);
  
}


removeAllCart(){


  this.cartItemList=[];

  this.productList.next(this.cartItemList);

}

}

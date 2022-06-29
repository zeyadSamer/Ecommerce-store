import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  
  public product:any=[];
  public totalPrice:number=0;

  constructor(private cartService:CartService) { }

  ngOnInit(): void {

    this.cartService.getProduct().subscribe(res=>{

      this.product=res;
      this.totalPrice=this.cartService.getTotalPrice();

    })
  }





removeItem(item:any){

  
this.cartService.removeCartItem(item);

}


deleteAllCart(){
  this.cartService.removeAllCart();
}

}

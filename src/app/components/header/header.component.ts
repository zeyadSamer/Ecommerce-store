import { Component, OnInit,Input } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  //setted by app component
  @Input() title:string

  public totalItems:number=0;
  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.cartService.getProduct().subscribe(res=>{
      this.totalItems=res.length;
      
      
      
    })




  }

}

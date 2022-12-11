import { Component } from '@angular/core';
import { ProductsService } from './../../shared/products.service'
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent {
products:any = [];
  constructor(private _ProductsService:ProductsService){}

  ngOnInit() : void{
  this.getproducts();
  }

  getproducts(){
 this._ProductsService.getproducts().subscribe((res) => {
   this.products = res.products;
   console.log(this.products);
   
 })
  }
}

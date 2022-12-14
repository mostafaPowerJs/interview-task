import { Component } from '@angular/core';
import { ProductsService } from './../../shared/products.service'
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent {
products:any = [];
selectedproducts : number = 0;
title = 'pagination';
POSTS: any ;
page : number = 1;
count : number = 0 ;
tableSize: number = 6;
  constructor(private _ProductsService:ProductsService){}

  ngOnInit() : void{
  this.getproducts();

  }
  //this is for the pagination
  onTableDataChange(event : any){
this.page = event;
this.getproducts();
  }
  onTableSizeChange(event : any): void{
this.tableSize = event.target.value;
this.page = 1;
this.getproducts();
  }
// adding products to the cart
  addproduct(){
    this.selectedproducts = this.selectedproducts + 1;
    this._ProductsService.Data.next(this.selectedproducts);
  }
//getting the products from the api
  getproducts(){
 this._ProductsService.getproducts().subscribe((res) => {
   this.products = res.products;
   for (let product of this.products) {
    let xx = product.description.slice(0, 60);
    product.description = xx;
   }
   
 })
  }
}




//search function

/**
 *   employees = [
    {name: 'Asmaa Hassan', phoneNumber: '01223654123', mail: 'asmaa@eda.com', nationalID: '28512185201450', img: 'assets/images/employee1.jpg'},
    {name: 'Esraa Sayed', phoneNumber: '01001245789', mail: 'esraa@eda.com', nationalID: '29602015214789', img: 'assets/images/employee2.jpg'},
    {name: 'Glal Eid', phoneNumber: '01247845125', mail: 'Glal@eda.com', nationalID: '28512185201450', img: 'assets/images/employee3.jpg'},
    {name: 'Khalid Sayed', phoneNumber: '01001245789', mail: 'esraa@eda.com', nationalID: '28512185201450', img: 'assets/images/employee4.jpg'},
    {name: 'Osama Mahmoud', phoneNumber: '01223654123', mail: 'asmaa@eda.com', nationalID: '28512185201450', img: 'assets/images/employee5.jpg'},
    {name: 'Hossam Aly', phoneNumber: '01001245789', mail: 'esraa@eda.com', nationalID: '28512185201450', img: 'assets/images/employee6.jpg'},
    {name: 'Maichel Labeb', phoneNumber: '01223654123', mail: 'asmaa@eda.com', nationalID: '28512185201450', img: 'assets/images/employee7.jpg'},
    {name: 'Fawzi Gamal', phoneNumber: '01001245789', mail: 'esraa@eda.com', nationalID: '28512185201450', img: 'assets/images/employee8.jpg'},
    
  ];


  searchWords: string = '';

  checkEmployees = this.employees;

  search:string = 'search'

  constructor() {

  }

  searchMethod() {
    this.checkEmployees = this.employees.filter(employee => employee.name.includes(this.searchWords) || employee.phoneNumber.includes(this.searchWords) || employee.nationalID.includes(this.searchWords));
  }
 */
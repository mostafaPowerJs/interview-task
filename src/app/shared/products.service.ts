import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
public Data = new BehaviorSubject(0);

  constructor(private _HttpClient:HttpClient) { }

  getproducts(): Observable<any>{
    return this._HttpClient.get('https://dummyjson.com/products');
  }
}

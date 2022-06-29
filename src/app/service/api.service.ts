import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
 apiUrl= "https://fakestoreapi.com/products/"
 endPoint="";
  constructor(private http:HttpClient) { }
   getProduct(){

    return this.http.get<any>(this.apiUrl).pipe(map((response:any)=>{
      
      return response;
   }));
  }

}

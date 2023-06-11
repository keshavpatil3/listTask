import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  baseUrl:string="https://jsonplaceholder.typicode.com/todos";
  httpheaders:HttpHeaders=new HttpHeaders()
                              .set("Content-type","application/json");
  constructor(private http:HttpClient) { }
  
  getDataFromServer(){
   let  Url=this.baseUrl;
   return this.http.get(Url,{headers:this.httpheaders})
  }
}

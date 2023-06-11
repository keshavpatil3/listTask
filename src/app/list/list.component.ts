import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit{
  allListData:any=[];
  p: number = 1;
 constructor(private http:HttpService){}
  ngOnInit(): void {
    this. getAllData()
  }
  getAllData(){
    this.http.getDataFromServer().subscribe((responce:any)=>{
      if(responce){
     this.allListData=responce;
     console.log("responce",responce)
      }
    })
    
    
  }
  toggleData(data:any) {
    data.completed = !data.completed;
    }

}

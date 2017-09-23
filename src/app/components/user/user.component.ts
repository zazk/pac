import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  model:string  = "McLaren Initialize";
  plate:number = 500;
  year:number = 1925;
  address:Address;
  races:string[];
  google:any;

  constructor() {
    console.log("Run Constructor User Component");
   }

  ngOnInit() {
    this.model = "Ferrari Schumacher ngOnInit";
    this.plate = 203;
    this.address = {
      street:"5th Avenue",
      zip:132123,
      state:"LA",
      city:"Lima"
    }
    this.races = ["Malasya","Nurenberg","Imola","Suzuka","Monaco"];
    
    

    console.log("Run ngOnInit on User Component");
  }

}

interface Address{
  street:string,
  city:string,
  zip:number,
  state:string
}
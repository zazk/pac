import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service'

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
  posts:Post[];

  constructor( private dataService:DataService ) {
    console.log("Run Constructor User Component");
   }

  ngOnInit() {
    this.model = "Ferrari Schumacher runs as the greatest";
    this.plate = 203;
    this.address = {
      street:"5th Avenue",
      zip:132123,
      state:"MX",
      city:"Lima"
    } 
    this.races = ["Malasya","Nurenberg","Imola","Suzuka","Monaco"];
    
    this.dataService.getPost().subscribe((posts) =>{
      console.log(posts);
      this.posts = posts;
    })

    console.log("Run ngOnInit on User Component");
  }

  onClickOnRace(){
    this.races.push("Indianapolis");
  }

  onSubmit(race){
    console.log( "Race selected",race);
    this.races.unshift(race);
    return false;
  }

  onDelete(race){
    for (var i = 0; i < this.races.length; i++) {
      if(this.races[i] == race){
        this.races.splice(i,1);
      }
      
    }
  }

}

interface Address{
  street:string,
  city:string,
  zip:number,
  state:string
}

interface Post {
  body:string,
  id:number,
  title:string,
  userId:1
}
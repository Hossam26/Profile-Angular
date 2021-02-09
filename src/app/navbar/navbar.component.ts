import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
first:boolean=false;
second:boolean=false;
third:boolean=false; 
disable(){
 
    this.first=false;
    this.second=false;
    this.third=false
}
check1(){
  if(this.first==false){
    this.first=true;
    this.second=false;
    this.third=false
  } 
}
check2(){
  if(this.second==false){
    this.first=false;
    this.second=true;
    this.third=false
  } 
}
check3(){
  if(this.third==false){
    this.first=false;
    this.second=false;
    this.third=true
  } 
}
  constructor() { }

  ngOnInit(): void {
  }
}

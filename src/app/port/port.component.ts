import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Profile } from "../profile";
@Component({
  selector: 'app-port',
  templateUrl: './port.component.html',
  styleUrls: ['./port.component.css']
})
export class PortComponent implements OnInit {
  plusIcon=faPlus
  constructor() { }
 profiles:Profile[]=
[
  {imgSrc:'../../assets/cabin.png',imgIcon:this.plusIcon},
  {imgSrc:'../../assets/cake.png',imgIcon:this.plusIcon},
  {imgSrc:'../../assets/circus.png',imgIcon:this.plusIcon},
  {imgSrc:'../../assets/game.png',imgIcon:this.plusIcon},
  {imgSrc:'../../assets/safe.png',imgIcon:this.plusIcon},
  {imgSrc:'../../assets/submarine.png',imgIcon:this.plusIcon}
]
  ngOnInit(): void {
  }

}

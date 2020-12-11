import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { DataService } from "../../../../services/data.service";

@Component({
  selector: "app-webdev",
  templateUrl: "./webdev.component.html",
  styleUrls: ["./webdev.component.scss"],
  encapsulation: ViewEncapsulation.None
  
})



export class WebdevComponent implements OnInit {

  copyright = "2017-21 Anthony Sallis";
  page = "Webdev";



  isOpen = false;
  showFirst= true ;

  toggle() {
    this.isOpen = !this.isOpen;
    this.showFirst=!this.showFirst;
  }


  goTo($event: any, id: any): void {
    
    $event.preventDefault();
    $event.stopPropagation();
    const tar = document.getElementById(id);
    
    //console.log(id);
    
    if (tar) {
      tar.focus();
      tar.scrollIntoView();
    }
   
  }
  
// EXPIRING NOTICE
// (C) 2020 Anthony Sallis with additional assistance from John McInnes
  // https://codechi.com/dev-tools/date-to-millisecond-calculators/comment-page-1/
  // set milliseconds for start 
  // (or console: let a = new Date().getTime(), then, a)

  aMinute = 60000 ;
  anHour = this.aMinute * 60 ;
  aDay = this.anHour * 24 ;
  aWeek = this.aDay * 7 ;

  setStart = 1607671021835 ;
  startDate = new Date(this.setStart) ;

  setEnd = this.setStart + this.aWeek ; // make current restart timer 
  endDate = new Date(this.setEnd) ;
  
  getNow: any;
  timeLeft: any;
  hoursLeftraw: any;
  hoursLeft: any;
  hoursLeftwhole: any ;
  minsLeft: any ;

  constructor() {   }

  ngOnInit(): void {
    this.getNow = Date.now();
    this.timeLeft = this.setEnd - this.getNow;
    this.hoursLeftraw = this.timeLeft / this.anHour;
    this.hoursLeft = this.hoursLeftraw.toFixed(2);
    this.hoursLeftwhole = parseInt(this.hoursLeftraw) ;
    console.log("hrs left whole: ",this.hoursLeftwhole);
    this.minsLeft = this.hoursLeft - this.hoursLeftwhole ;
    this.minsLeft = (this.minsLeft * 60).toFixed(0) ;

    //console.log(this.hoursLeftwhole, this.minsLeft);
        
    setInterval(this._timerVal.bind(this), 30000);
  }

  private _timerVal(){
    
    this.getNow = Date.now();
    this.timeLeft = this.setEnd - this.getNow;
    this.hoursLeftraw = this.timeLeft / this.anHour;
    this.hoursLeft = this.hoursLeftraw.toFixed(2);

    this.hoursLeftwhole = parseInt(this.hoursLeftraw);
    this.minsLeft = this.hoursLeft - this.hoursLeftwhole;
    this.minsLeft = (this.minsLeft * 60).toFixed(0);

  }

  
}

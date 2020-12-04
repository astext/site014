import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { DataService } from "../../../../services/data.service";




@Component({
  selector: "app-unit5",
  templateUrl: "./unit5.component.html",
  styleUrls: ["./unit5.component.scss"],
  encapsulation: ViewEncapsulation.None
  
})



export class Unit5Component implements OnInit {

  copyright = "2020 Anthony Sallis";
  page = "Unit5";

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
  
  
 // show hide
 showBlock: boolean=true ;
 show: boolean = false;
 
 
 toggleContent() {
   this.showBlock = !this.showBlock ;
 }




  constructor(public dataService: DataService) {}

  ngOnInit() {
    
  }
 
}

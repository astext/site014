import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { DataService } from "../../../../data.service";
/* import {
  trigger,
  animate,
  style,
  transition,
  state
} from "@angular/animations"; */



@Component({
  selector: "app-unit5",
  templateUrl: "./unit5.component.html",
  styleUrls: ["./unit5.component.scss"],
  encapsulation: ViewEncapsulation.None
  /* animations: [
    trigger("openClose", [
      // ...
      state(
        "open",
        style({
          height: "300px",
          opacity: 1,
          backgroundColor: "yellow",
          cursor: "pointer"
        })
      ),
      state(
        "closed",
        style({
          height: "60px",
          opacity: 0.8,
          backgroundColor: "green",
          cursor: "pointer"
        })
      ),
      transition("open => closed", [animate("1s")]),
      transition("closed => open", [animate("0.5s")])
    ])
  ] */
})



export class Unit5Component implements OnInit {

  copyright = "2019 Anthony Sallis";
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
  


  // https://www.yearofmoo.com/2017/06/new-wave-of-animation-features.html#new-animation-features-full-demo

  //  toggle() {
  //    this.bindingVar == 'fadeOut' ? this.fadeIn() : this.fadeOut();
  //  }

  contacts: { id: any; name: any; description: any; email: any }[];
  selectedContact: any;

  constructor(public dataService: DataService) {}

  ngOnInit() {
    this.contacts = this.dataService.getContacts();

  }
  public selectContact(contact) {
    this.selectedContact = contact;
  }
}

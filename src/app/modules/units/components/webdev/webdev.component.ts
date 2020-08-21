import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { DataService } from "../../../../data.service";

@Component({
  selector: "app-webdev",
  templateUrl: "./webdev.component.html",
  styleUrls: ["./webdev.component.scss"],
  encapsulation: ViewEncapsulation.None
  
})



export class WebdevComponent implements OnInit {

  copyright = "2019-20 Anthony Sallis";
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

import { Component, ViewEncapsulation, OnInit } from "@angular/core";
import { DataService } from "../services/data.service";


declare var require: any;
@Component({
  selector: "app-landing",
  templateUrl: "./landing.component.html",
  styleUrls: ["./landing.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class LandingComponent implements OnInit {

  copyright = "2020 Anthony Sallis";
  page = "Landing";

 
  contents: { id: number; link: any; title: any; info: any; date: any; using: any; show: boolean }[];


  constructor(public dataService: DataService) {}

  ngOnInit() {

    this.contents = this.dataService.getContents();
    
       
  }
}

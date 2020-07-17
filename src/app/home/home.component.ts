import { Component, ViewEncapsulation, OnInit } from '@angular/core';

declare var require: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  copyright = "2019-20 Anthony Sallis";
  page = "Home";

  appver = require("../../../package.json").version;
  bootstrapver = require("../../../node_modules/bootstrap/package.json").version;
  angularver = require("../../../node_modules/@angular/core/package.json")._id;
  ngcliver = require("../../../node_modules/@angular/compiler-cli/package.json")._id;
  typescriptver = require("../../../node_modules/typescript/package.json")._id;

  lastupdate = document.lastModified; // get proper 

  constructor() { }

  ngOnInit() {
  }

}

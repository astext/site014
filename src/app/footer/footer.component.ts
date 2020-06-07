import { Component, ViewEncapsulation, OnInit } from '@angular/core';

declare var require: any;

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FooterComponent implements OnInit {

  appver = require("../../../package.json").version;
  appCreator = "AStext";
  lastUpdate = new Date(document.lastModified);
  mytitle = "MusicBox";

  constructor() { }

  ngOnInit() {
  }

}

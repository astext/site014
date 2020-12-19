import { Component, ViewEncapsulation, OnInit, Input } from '@angular/core';

declare var require: any;

@Component({
  selector: 'app-diagnostics',
  templateUrl: './diagnostics.component.html',
  styleUrls: ['./diagnostics.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DiagnosticsComponent implements OnInit {

  copyright = "(C) 2019-21 Anthony Sallis";
  @Input() partName = "Diagnostics component";

  appver = require("../../../package.json").version;
  bootstrapver = require("../../../node_modules/bootstrap/package.json").version;
  angularver = require("../../../node_modules/@angular/core/package.json").version;
  ngcliver = require("../../../node_modules/@angular/compiler-cli/package.json")._id;
  typescriptver = require("../../../node_modules/typescript/package.json")._id;
  iconsname = require("../../../node_modules/material-design-icons-iconfont/package.json").name;
  iconsver = require("../../../node_modules/material-design-icons-iconfont/package.json").version;



  lastUpdate = new Date(document.lastModified);

  constructor() { }

  ngOnInit(): void {
  }

}

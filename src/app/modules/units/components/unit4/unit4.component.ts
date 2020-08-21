import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-unit4',
  templateUrl: './unit4.component.html',
  styleUrls: ['./unit4.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class Unit4Component implements OnInit {

  copyright = "2013-2020 Anthony Sallis";
  page = "Unit4";

  constructor() { }

  ngOnInit() {
  }

}

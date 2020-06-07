import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-unit6',
  templateUrl: './unit6.component.html',
  styleUrls: ['./unit6.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class Unit6Component implements OnInit {

  copyright = "2019 Anthony Sallis";
  page = "Unit6";


  constructor() { }

  ngOnInit() {
  }

}

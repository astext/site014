import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as tracks from '../../../../../assets/json/tracks.json';



@Component({
  selector: 'app-unit7',
  templateUrl: './unit7.component.html',
  styleUrls: ['./unit7.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class Unit7Component implements OnInit {

  copyright = "2020 Anthony Sallis";
  page = "Unit7";

  tracks: any ;

  

  constructor() { }

  ngOnInit() {
  }

}

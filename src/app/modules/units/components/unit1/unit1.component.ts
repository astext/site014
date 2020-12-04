import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Unit1Service } from 'src/app/services/unit1.service';

@Component({
  selector: 'app-unit1',
  templateUrl: './unit1.component.html',
  styleUrls: ['./unit1.component.scss'],
  encapsulation: ViewEncapsulation.None
})


export class Unit1Component implements OnInit {
  unit1compositions: { id: number; title: any; source: any; caption: any; key: any; year: any; show: boolean; }[];

  copyright = "2013-19 Anthony Sallis";
  page = "Unit1" ;


   constructor(public dataService: Unit1Service) {}

  ngOnInit() {
    this.unit1compositions = this.dataService.getUnit1compositions();

  }

}

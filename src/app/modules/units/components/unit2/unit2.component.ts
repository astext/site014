import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Unit2Service } from 'src/app/unit2.service';

@Component({
  selector: 'app-unit2',
  templateUrl: './unit2.component.html',
  styleUrls: ['./unit2.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class Unit2Component implements OnInit {
  

  copyright = "1978-9 Anthony Sallis/Stephen Hill except 'Panik'";
  page = "Unit2";

  // show hide
  showBlock: boolean=true ;
  show: boolean = false;
  unit2compositions: { id: number; title: any; source: any; caption: any; key: any; year: any; show: boolean; }[];
  
  toggleContent() {
		this.showBlock = !this.showBlock ;
	}

  constructor(public dataService: Unit2Service) { }

  ngOnInit() {
    this.unit2compositions = this.dataService.getUnit2compositions();

  }



}

import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Unit3Service } from 'src/app/unit3.service';

@Component({
  selector: 'app-unit3',
  templateUrl: './unit3.component.html',
  styleUrls: ['./unit3.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class Unit3Component implements OnInit {

  copyright = "2006-12 Anthony Sallis";
  page = "Unit3";

  // show hide
  showBlock: boolean=true ;
  show: boolean = false;
  unit3compositions: { id: number; title: any; source: any; caption: any; key: any; year: any; show: boolean; }[];
  
  toggleContent() {
		this.showBlock = !this.showBlock ;
	}

  constructor(public dataService: Unit3Service) { }

  ngOnInit() {
    this.unit3compositions = this.dataService.getUnit3compositions();
  }

}

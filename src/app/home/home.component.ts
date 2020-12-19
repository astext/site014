import { Component, ViewEncapsulation, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  copyright = "2019-21 Anthony Sallis";
  @Input() partName = "Home page";

  

  constructor() { }

  ngOnInit() {
  }

}

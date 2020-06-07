import { Component, ViewEncapsulation, HostBinding } from '@angular/core';


declare var require: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'site012';

  
  githubLink = "https://github.com/astext/site012/";
  sitedemoLink = "http:/www.astext.net/site012/";

  
}

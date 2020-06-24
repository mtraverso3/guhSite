import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'critterSite';
  sideNavService = false;
  navWidth = 10;

  oneLiner: string;
  private oneLiners: string[];

  constructor(){
    this.oneLiners = [
      "This is a funny one liner",
      "This is a funny two liner",
      "This is a funny three liner"
    ];
    this.oneLiner = this.oneLiners[Math.round(Math.random()*this.oneLiners.length)];
    console.log(this.oneLiner)
  }

  openDrawer() {
    if(this.sideNavService){
      this.navWidth = 10;
    }else{
      this.navWidth = 20;
    }
    this.sideNavService = !this.sideNavService;
  }

  GoHome() {

  }
}

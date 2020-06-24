import { Component, OnInit } from '@angular/core';
import {ApiService} from "../api.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-developer-panel',
  templateUrl: './developer-panel.component.html',
  styleUrls: ['./developer-panel.component.css']
})
export class DeveloperPanelComponent implements OnInit {
  loggedIn = false;
  private password: string;
  constructor(private api: ApiService, private router: Router) { }
  login(){
    if(this.api.login(this.password)){
      console.log("im in")
      this.loggedIn = true;
    }else{
      this.router.navigate([""]);
    }
  }
  ngOnInit() {
    if(this.api.sessionID != null){
      this.loggedIn = true;
    }
  }

}

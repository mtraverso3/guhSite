import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ApiService} from "../api.service";
import {$} from "protractor";

@Component({
  selector: 'app-new-post-input',
  templateUrl: './new-post-input.component.html',
  styleUrls: ['./new-post-input.component.css']
})
export class NewPostInputComponent implements OnInit {

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  fifthFormGroup: FormGroup;
  name: string;
  img: any;
  thumbnail: any;
  loggedIn = false
  private description: any;
  tags: any;
  response = null;
  constructor(private formBuilder: FormBuilder,
              private api: ApiService) { }

  ngOnInit() {
    this.firstFormGroup = this.formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this.formBuilder.group({
      ttCtrl: ['', Validators.required]
    });
    this.fourthFormGroup = this.formBuilder.group({
      reasonCtrl: ['', Validators.required]
    });
    this.fifthFormGroup = this.formBuilder.group({
      verifyCtrl: ['', Validators.required]
    });

  }

  uploadImage() {

  }

  onFileChanged(event) {
    let reader = new FileReader();
    reader.onload = function(){
      let output: any = document.getElementById('verifyImage');
      output.src = reader.result;
    }
    console.log("htfxcgjvhkbjl1");
    if(event.target.files[0]){
      this.img = event.target.files[0]
      reader.readAsDataURL(event.target.files[0]);
      console.log("htfxcgjvhkbjl2");
    }
   }

  getValues(){
    this.name = document.forms[0].elements['Name of the Critter'].value;
    this.description = document.forms[2].elements['Description'].value;
    this.tags = this.CSVtoArray(document.forms[3].elements['reason'].value);

  }
  CSVtoArray(text){
    var re_valid = /^\s*(?:'[^'\\]*(?:\\[\S\s][^'\\]*)*'|"[^"\\]*(?:\\[\S\s][^"\\]*)*"|[^,'"\s\\]*(?:\s+[^,'"\s\\]+)*)\s*(?:,\s*(?:'[^'\\]*(?:\\[\S\s][^'\\]*)*'|"[^"\\]*(?:\\[\S\s][^"\\]*)*"|[^,'"\s\\]*(?:\s+[^,'"\s\\]+)*)\s*)*$/;
    var re_value = /(?!\s*$)\s*(?:'([^'\\]*(?:\\[\S\s][^'\\]*)*)'|"([^"\\]*(?:\\[\S\s][^"\\]*)*)"|([^,'"\s\\]*(?:\s+[^,'"\s\\]+)*))\s*(?:,|$)/g;
    // Return NULL if input string is not well formed CSV string.
    if (!re_valid.test(text)) return null;
    var a = [];                     // Initialize array to receive values.
    text.replace(re_value, // "Walk" the string using replace with callback.
      function(m0, m1, m2, m3) {
        // Remove backslash from \' in single quoted values.
        if      (m1 !== undefined) a.push(m1.replace(/\\'/g, "'"));
        // Remove backslash from \" in double quoted values.
        else if (m2 !== undefined) a.push(m2.replace(/\\"/g, '"'));
        else if (m3 !== undefined) a.push(m3);
        return ''; // Return empty string.
      });
    // Handle special case of empty last value.
    if (/,\s*$/.test(text)) a.push('');
    return a;
  }

  submit(){
    var formData = new FormData();
    formData.append("image", this.img);
    formData.append("thumbnail", this.thumbnail);

    this.response = this.api.uploadCreature(formData, this.name, this.description, this.tags.toString());

  }

  onFileChangedT(event) {
    let reader = new FileReader();
    reader.onload = function(){
      let output: any = document.getElementById('verifyThumbnail');
      output.src = reader.result;
    }
    console.log("htfxcgjvhkbjl1");
    if(event.target.files[0]){
      this.thumbnail = event.target.files[0]
      reader.readAsDataURL(event.target.files[0]);
      console.log("htfxcgjvhkbjl2");
    }
  }
}

import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {ApiService} from "../api.service";
@Component({
  selector: 'app-homesite',
  templateUrl: './homesite.component.html',
  styleUrls: ['./homesite.component.css']
})
export class HomesiteComponent implements OnInit {
  entries = [
    {
      name: "Hell Bender",
      thumbnailLoc: "../../assets/CreatureNoBackend/Thumbnails/HBender.png",
      fullImage: "../../assets/CreatureNoBackend/HBender.jpg",
      description:"this is the description",
      tags: [
        "tag1",
        "tag2"
      ],
      comments: [
        "comment1",
        "comment2",
        "comment3"
      ]
    },
    {
      name: "Petroleum Fly",
      thumbnailLoc: "../../assets/CreatureNoBackend/Thumbnails/PFlies.png",
      fullImage: "../../assets/CreatureNoBackend/PFlies.jpg",
      description:"this is the description",
      tags: [
        "tag1",
        "tag2"
      ],
      comments: [
        "comment1",
        "comment2",
        "comment3"
      ]

    },
    {
      name: "Rust Flatworm",
      thumbnailLoc: "../../assets/CreatureNoBackend/Thumbnails/RustFlatworm.png",
      fullImage: "../../assets/CreatureNoBackend/RustFlatworm.jpg",
      description:"this is the description",
      tags: [
        "tag1", "tag2"
      ],
      comments: [
        "comment1",
        "comment2",
        "comment3"
      ]
    }]
  currentAnimal = null;
  constructor(private ApiService: ApiService) {

  }

  ngOnInit() {
  }
  commentFormControl = new FormControl('', [
    Validators.required,
  ]);

  openAnimal(currentIndex){
    this.currentAnimal = this.entries[currentIndex];
  }
  closeAnimal(){
    this.currentAnimal = null;
  }

  submitComment() {
    console.log(this.ApiService.postComment("", ""))
  }
}


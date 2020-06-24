import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiURL = "http://35.203.176.124:25565";
  private req: XMLHttpRequest;
  constructor() { }
  sessionID=null;
  makeRequest(ending, requestHeaders, type, image){
    var req;
    req = new XMLHttpRequest();
    req.open(type, this.apiURL + ending, false);
    for(var i = 0; i < requestHeaders.length; i++){
      req.setRequestHeader(requestHeaders[i].header, requestHeaders[i].value);
    }
    if(image !== null){
      req.send(image);
      console.log(req.body)
    } else {
      req.send();
      console.log(req);
    }
    return req.response;
  }

  getAllCreatures() {
    return this.makeRequest('/getCreatures', [], "GET", null);
  }
  getCreature(creatureID) {
    return this.makeRequest('/getCreature', [{header: "CreatureID", value: creatureID}], "GET", null);
  }
  getComments(creatureID) {
    return this.makeRequest('/getComments', [{header: "CreatureID", value: creatureID}], "GET", null);
  }
  login(password) {
    this.sessionID = this.makeRequest('/login', [{header: "password", value: password}], "PUT", null);
    console.log(this.sessionID)
    return this.sessionID
  }
  uploadCreature(img, name, description, tags) {
    return this.makeRequest('/upload', [{header: "sessionID", value: this.sessionID}, {header: "name", value: name}, {header: "description", value: description}, {header: "tags", value: tags}], "POST", img);
  }
  uploadMinilesson(img, description) {
    return this.makeRequest('/uploadMinilesson', [{header: "sessionID", value: this.sessionID}, {header: "Description", value: description}], "POST", img);
  }
  updateCreature(img, name, description, tags, creatureID) {
    return this.makeRequest('/updateCreature', [{header: 'creatureID', value: creatureID}, {header: "sessionID", value: this.sessionID}, {header: "name", value: name}, {header: "Description", value: description}, {header: "tags", value: tags}], "PUT", img);
  }
  deleteCreature(creatureID){
    return this.makeRequest('/deleteCreature', [{header: 'creatureID', value: creatureID}, {header: "sessionID", value: this.sessionID}], "DELETE", null);
  }
  postComment(creatureID, comment) {
    return this.makeRequest('/postComment', [{header: "CreatureID", value: creatureID}, {header: "comment", value: comment}], "POST", null);
  }
}

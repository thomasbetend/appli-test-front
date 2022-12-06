import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Actor } from '../models/actor.model';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent implements OnInit {

  actor : Actor = new Actor();
  
  data : any;

  myUrl = 'http://localhost:8000/api/special_actors.json';

  constructor(public myHttp : HttpClient) { }

  ngOnInit(): void { }

  addActor() {
    console.log(this.actor.firstname);
    console.log(this.actor.lastname); 
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(this.actor);
    return this.myHttp.post(this.myUrl, body, {'headers':headers}).subscribe(data => {
      console.log(data);
    });
  }

  /* actor: Actor = new Actor();
  
  data : any;

  constructor(private apiService : ApiService) { }

  ngOnInit(): void { }


  addActor() {
    console.log(this.actor.firstname);
    console.log(this.actor.lastname); 

    this.apiService.addActor(this.actor).subscribe(data => {
      console.log(data);
    });
  } */
}

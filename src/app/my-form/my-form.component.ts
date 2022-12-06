import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Actor } from '../models/actor.model';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent implements OnInit {

  actor: Actor = new Actor();
  
  data: any;

  constructor(private apiService : ApiService, private router: Router) { }

  ngOnInit(): void { }

  addActor() {
    console.log(this.actor.firstname);
    console.log(this.actor.lastname); 

    this.apiService.addActor(this.actor).subscribe(data => {
      console.log(data);
      this.router.navigate(["/actors-list"]);
    });
  }

}

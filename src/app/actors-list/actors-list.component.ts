import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Actor } from '../models/actor.model';
import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-actors-list',
  templateUrl: './actors-list.component.html',
  styleUrls: ['./actors-list.component.css']
})
export class ActorsListComponent implements OnInit {

  data : any;

/*   myUrl = 'http://localhost:8000/api/special_actors.json';
  myUrl2 = 'http://localhost:8000/api/special_actors'; */


/*   constructor(public myHttp : HttpClient) 
  {
    this.myHttp.get(this.myUrl).subscribe( data => {
      console.log(data);
      this.data = data;
    });
  } */

  constructor(private apiService : ApiService){
  }

  ngOnInit(): void {
    this.refreshList();
  }

  refreshList() {
    this.apiService.getActorsList().subscribe(data => {
      console.log(data);
      this.data = data;
  });
  }
  
/*   deleteActor(id: any) {
    return this.myHttp.delete(`${this.myUrl2}/${id}`).subscribe(() => {
      console.log("test")
    });
  }  */

  deleteActor(id: any) {
    this.apiService.deleteActor(id).subscribe(() => {
      console.log("test");
      this.refreshList();
    });
  } 

}

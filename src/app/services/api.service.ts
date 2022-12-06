import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actor } from "../models/actor.model";

@Injectable({providedIn:'root'})

export class ApiService {

    baseURL: string = "http://localhost:8000/api";

    constructor(private http: HttpClient) {
    }

    getActorsList() {
        return this.http.get(`${this.baseURL}/special_actors.json`)
    }

    deleteActor(id: any) {
        return this.http.delete(`${this.baseURL}/special_actors/${id}`)
    }

    addActor(actor: Actor) {
        const headers = {'content-type': 'application/json'}  
        const body=JSON.stringify(actor);
        console.log(body)
        return this.http.post(`${this.baseURL}/special_actors.json`, body,{'headers': headers})
    }
}
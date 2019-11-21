import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Friends} from "../shared/interfaces";

@Injectable({
  providedIn: 'root'
})
export class FriendService {

  constructor(private http: HttpClient) { }
  find():Observable<Friends[]>{
    return this.http.get<Friends[]>('/api/friends/find');
  }

}

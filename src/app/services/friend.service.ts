import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Friends} from "../shared/interfaces";

@Injectable({
  providedIn: 'root'
})
export class FriendService {

  constructor(private http: HttpClient) { }
  findFriends():Observable<Friends[]>{
    return this.http.get<Friends[]>('/api/friends/getAll');
  }
  save(id:bigint):Observable<any>{
    return this.http.get<any>('/api/friends/save/'+ id);
  }
  myFriends():Observable<Friends[]>{
    return this.http.get<Friends[]>('/api/friends/myFriends');
  }
  del(id: bigint):Observable<any>{
    return this.http.delete<any>('/api/friends/del/' + id);
  }

  myRequests():Observable<Friends[]> {
    return this.http.get<Friends[]>('/api/friends/myRequests');
  }

  friendsRequest():Observable<Friends[]> {
    return this.http.get<Friends[]>('/api/friends/friendsRequest');

  }
}

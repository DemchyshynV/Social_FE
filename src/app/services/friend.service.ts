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
  save(id:bigint):Observable<any>{
    return this.http.post<any>('/api/friends/save', id);
  }
  myFriends():Observable<Friends[]>{
    return this.http.get<Friends[]>('/api/friends/myFriends');
  }
  del(id: bigint):Observable<any>{
    return this.http.post<any>('/api/friends/del', id);
  }

}

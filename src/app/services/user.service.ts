import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Profile} from "../shared/interfaces";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  getProfile(): Observable<Profile> {
    return this.http.get<Profile>('/api/profile');
  }
}

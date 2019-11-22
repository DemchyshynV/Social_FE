import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Profile} from "../shared/interfaces";

@Injectable({
  providedIn: 'root'
})
export class SiteLayoutService {
  avatarBlank: string = "../../../../assets/blankAvatar.gif";
  constructor(private http: HttpClient) {
  }

  getProfile(): Observable<Profile> {
    return this.http.get<Profile>('/api/profile');
  }

  setAvatar(file: File): Observable<Profile> {
    let formData = new FormData();
    formData.append('file', file, file.name)
    return this.http.post<Profile>( '/api/profile/avatar', formData);
  }

}

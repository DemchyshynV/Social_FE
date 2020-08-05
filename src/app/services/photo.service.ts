import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Photo} from '../shared/interfaces';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private httpClient: HttpClient) {
  }

  setPhoto(fileData: File): Observable<any> {
    let formData = new FormData();
    formData.append('file', fileData, fileData.name);
    return this.httpClient.post<any>('/api/photos/album/set', formData);
  }

  getPhoto(): Observable<Photo[]> {
    return this.httpClient.get<Photo[]>('/api/photos/album/get');
  }
}

import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Body, Friends, Senders} from "../shared/interfaces";

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private httpClient: HttpClient) {
  }

  getSenders(): Observable<Senders[]> {
    return this.httpClient.get<Senders[]>('/api/message/getSenders');
  }

  getBody(id: bigint): Observable<Body[]> {
    return this.httpClient.get<Body[]>('/api/message/getBody/' + id);
  }

  addMessage(body: string, id: bigint):Observable<any> {
    let result = {body: body, id:id};
    console.log(result);
    return this.httpClient.post<any>('/api/message/addMessage', result)
  }
}

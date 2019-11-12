import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token = null;

  constructor(private http: HttpClient) {
  }

  register(user: string): Observable<any> {

    return this.http.post('api/auth/register', user);

  }

  login(user: string): Observable<{ Authorization: string }> {
    return this.http.post<{ Authorization: string }>('api/auth/login', btoa(JSON.stringify(user)))
      .pipe(tap(({Authorization}) => {
        localStorage.setItem('Authorization', Authorization);
        this.setToken(Authorization);
      }));
  }

  setToken(token: string) {
    this.token = token;
  }

  getToken(): string {
    return this.token;
  }

  getRoles(): string[] {
    let temp = this.token.toString().substr(8);
    let s = atob(temp.split('.')[1]);
    let parse = JSON.parse(s);
    let roles = parse.roles;
    return roles;
  }

  isAuthenticated(): boolean {
    return !!this.token;
  }

  logout() {
    this.setToken(null);
    localStorage.clear();
  }

  // login(user: string): Observable<any> {
  //   return this.http.post('api/login', user);
  //
  // }


}

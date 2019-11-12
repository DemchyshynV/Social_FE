import {Component, OnInit} from '@angular/core';
import {AuthService} from "./services/auth.service";

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit{
  constructor (private auth: AuthService){

  }
  ngOnInit(): void {
    let potencialToken = localStorage.getItem('Authorization');
    if (potencialToken !== null){
      this.auth.setToken(potencialToken);
    }
  }
}

import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../services/auth.service";
import {UserService} from "../../../services/user.service";
import {Profile} from "../../interfaces";
import {Observable} from "rxjs";

@Component({
  selector: 'app-site-layout',
  templateUrl: './site-layout.component.html',
  styleUrls: ['./site-layout.component.css']
})
export class SiteLayoutComponent implements OnInit {
  isAdmin: boolean = false;
  links = [
    {url:'/massages', name: 'Сообщения'},
    {url:'/friends', name: 'Друзья'},
    {url:'/photos', name: 'Фото'},
    {url:'/music', name: 'Музыка'},
    {url:'/settings', name: 'Настройки'}

  ];
  profile$: Observable<Profile>;

  constructor(private auth: AuthService, private userService: UserService) {
  }

  ngOnInit() {
    for (const role of this.auth.getRoles()) {
      if (role === 'ROLE_ADMIN')
        this.isAdmin = true;
    }
    this.profile$ = this.userService.getProfile();
  }
}

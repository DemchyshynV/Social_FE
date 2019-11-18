import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../services/auth.service";
import {UserService} from "../../../services/user.service";
import {Observable} from "rxjs";
import {SiteLayout} from "../../interfaces";

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
  siteLayout$: Observable<SiteLayout>;

  constructor(private auth: AuthService, private userService: UserService) {
  }

  ngOnInit() {

    this.siteLayout$ = this.userService.getProfile();
  }
}

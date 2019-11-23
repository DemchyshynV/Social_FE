import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {
links = [
  {url: '/friends/myFriends', name: 'Мои Друзья'},
  {url: '/friends/findFriends', name: 'Найти Друзей'},
  {url: '/friends/myRequests', name: 'Мои запросы'},
  {url: '/friends/friendsRequest', name: 'Хочет быть другом'}
];
  constructor() { }

  ngOnInit() {
  }

}

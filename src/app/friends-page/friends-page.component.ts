import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Friends} from "../shared/interfaces";
import {FriendService} from "../services/friend.service";

@Component({
  selector: 'app-friends-page',
  templateUrl: './friends-page.component.html',
  styleUrls: ['./friends-page.component.css']
})
export class FriendsPageComponent implements OnInit {
friends$: Observable<Friends[]>;
avatarBlank: string = "../../../../assets/avatarBlank.gif";
  constructor(private friendService: FriendService) { }

  ngOnInit() {
    this.friends$=this.friendService.find();
  }

}

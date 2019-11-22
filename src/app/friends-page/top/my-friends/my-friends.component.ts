import { Component, OnInit } from '@angular/core';
import {FriendService} from "../../../services/friend.service";
import {Observable} from "rxjs";
import {Friends} from "../../../shared/interfaces";
import {SiteLayoutService} from "../../../services/site-layout.service";

@Component({
  selector: 'app-my-friends',
  templateUrl: './my-friends.component.html',
  styleUrls: ['./my-friends.component.css']
})
export class MyFriendsComponent implements OnInit {
// friends$ :Observable<Friends[]>;
  friends:Friends[];
  constructor(private friendService: FriendService, private siteLayoutService:SiteLayoutService) { }

  ngOnInit() {
    // this.friends$ =this.friendService.myFriends();
    this.friendService.myFriends().subscribe(value => this.friends = value);
  }

  del(friend: Friends) {
    this.friendService.del(friend.id).subscribe();
    this.friends.splice(this.friends.indexOf(friend),1);
  }
}

import {Component, OnInit} from '@angular/core';
import {Friends} from "../../../shared/interfaces";
import {FriendService} from "../../../services/friend.service";
import {SiteLayoutService} from "../../../services/site-layout.service";

@Component({
  selector: 'app-friends-request',
  templateUrl: './friends-request.component.html',
  styleUrls: ['./friends-request.component.css']
})
export class FriendsRequestComponent implements OnInit {

  friends: Friends[];

  constructor(private friendService: FriendService, private siteLayoutService: SiteLayoutService) {
  }

  ngOnInit() {
    // this.friends$ =this.friendService.myFriends();
    this.friendService.friendsRequest().subscribe(value => this.friends = value);
  }

  del(friend: Friends) {
    this.friendService.del(friend.id).subscribe();
    this.friends.splice(this.friends.indexOf(friend), 1);
  }

  confirm(friend: Friends) {
    this.friendService.save(friend.id).subscribe();
    this.friends.splice(this.friends.indexOf(friend), 1);
  }
}

import { Component, OnInit } from '@angular/core';
import {FriendService} from "../../../services/friend.service";
import {Friends} from "../../../shared/interfaces";
import {SiteLayoutService} from "../../../services/site-layout.service";

@Component({
  selector: 'app-find-friends',
  templateUrl: './find-friends.component.html',
  styleUrls: ['./find-friends.component.css']
})
export class FindFriendsComponent implements OnInit {
// friends$:Observable<Friends[]>;
  friends:Friends[];
  constructor(private friendService:FriendService, private siteLayoutService:SiteLayoutService) { }

  ngOnInit() {
    // this.friends$ = this.friendService.find();
    this.friendService.findFriends().subscribe(value => this.friends = value)
  }
  save(friend:Friends){
    this.friendService.save(friend.id).subscribe();
    this.friends.splice(this.friends.indexOf(friend), 1)
  }
}

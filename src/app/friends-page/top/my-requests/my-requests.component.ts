import { Component, OnInit } from '@angular/core';
import {Friends} from "../../../shared/interfaces";
import {FriendService} from "../../../services/friend.service";
import {SiteLayoutService} from "../../../services/site-layout.service";

@Component({
  selector: 'app-my-requests',
  templateUrl: './my-requests.component.html',
  styleUrls: ['./my-requests.component.css']
})
export class MyRequestsComponent implements OnInit {
  friends:Friends[];
  constructor(private friendService:FriendService, private siteLayoutService:SiteLayoutService) { }

  ngOnInit() {
    this.friendService.myRequests().subscribe(value => this.friends = value)
  }
  del(friend: Friends) {
    this.friendService.del(friend.id).subscribe();
    this.friends.splice(this.friends.indexOf(friend),1);
  }

}

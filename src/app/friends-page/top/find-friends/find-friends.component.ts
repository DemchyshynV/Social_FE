import { Component, OnInit } from '@angular/core';
import {FriendService} from "../../../services/friend.service";
import {Observable} from "rxjs";
import {Friends} from "../../../shared/interfaces";
import {SiteLayoutService} from "../../../services/site-layout.service";

@Component({
  selector: 'app-find-friends',
  templateUrl: './find-friends.component.html',
  styleUrls: ['./find-friends.component.css']
})
export class FindFriendsComponent implements OnInit {
friends$:Observable<Friends[]>;
  constructor(private friendService:FriendService, private siteLayoutService:SiteLayoutService) { }

  ngOnInit() {
    this.friends$ = this.friendService.find();
  }
  save(id:bigint){
    this.friendService.save(id).subscribe();
  }
}

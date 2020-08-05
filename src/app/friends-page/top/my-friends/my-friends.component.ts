import {Component, OnInit} from '@angular/core';
import {FriendService} from '../../../services/friend.service';
import {Observable} from 'rxjs';
import {Friends} from '../../../shared/interfaces';
import {SiteLayoutService} from '../../../services/site-layout.service';
import {MessageService} from '../../../services/message.service';
import {Router} from '@angular/router';
import {Socket} from 'ngx-socket-io';

@Component({
  selector: 'app-my-friends',
  templateUrl: './my-friends.component.html',
  styleUrls: ['./my-friends.component.css']
})
export class MyFriendsComponent implements OnInit {
// friends$ :Observable<Friends[]>;
  friends: Friends[];

  constructor(private friendService: FriendService, private siteLayoutService: SiteLayoutService, private messageService: MessageService, private router: Router, private socket: Socket) {
  }

  ngOnInit() {
    // this.friends$ =this.friendService.myFriends();
    this.friendService.myFriends().subscribe(value => this.friends = value);
    this.socket.on('confirm', (data) => {
      this.friends.push(data.data.data);
    });
  }

  del(friend: Friends) {
    this.friendService.del(friend.id).subscribe();
    this.friends.splice(this.friends.indexOf(friend), 1);
  }

  message(friend: Friends) {
    this.router.navigate(['massages'], {
      state: {data: friend}
    });
  }
}

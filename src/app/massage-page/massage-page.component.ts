import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Body, Friends, Senders} from '../shared/interfaces';
import {MessageService} from '../services/message.service';
import {SiteLayoutService} from '../services/site-layout.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-massage-page',
  templateUrl: './massage-page.component.html',
  styleUrls: ['./massage-page.component.css']
})
export class MassagePageComponent implements OnInit {
  senders$: Observable<Senders[]>;
  body: Body[] = [];
  targetId: bigint;
  senders: Senders[];

  constructor(private messageService: MessageService, private siteLayoutService: SiteLayoutService) {
  }

  ngOnInit() {
    const currentFriend = history.state.data as Senders;
    this.messageService.getSenders().subscribe(value => {
      this.senders = value;
      if (currentFriend && !this.senders.map(sender => sender.id).includes(currentFriend.id)) {
        this.senders.unshift(currentFriend);
        this.getBody(currentFriend.id);
      } else if (this.senders.length) {
        this.getBody(this.senders[0].id);
      }
    });
  }

  getBody(id: bigint) {
    this.targetId = id;
    this.messageService.getBody(id).subscribe(value => this.body = value);

  }
}

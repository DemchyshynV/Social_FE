import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Body, Friends, Senders} from "../shared/interfaces";
import {MessageService} from "../services/message.service";
import {SiteLayoutService} from "../services/site-layout.service";

@Component({
  selector: 'app-massage-page',
  templateUrl: './massage-page.component.html',
  styleUrls: ['./massage-page.component.css']
})
export class MassagePageComponent implements OnInit {
  senders$: Observable<Senders[]>;
  body: Body[] =[];
  targetId: bigint;

  constructor(private messageService: MessageService, private siteLayoutService: SiteLayoutService) {
  }

  ngOnInit() {
    this.senders$ = this.messageService.getSenders();
  }

  getBody(id: bigint) {
    this.targetId = id;
    this.messageService.getBody(id).subscribe(value => this.body = value);

  }
}

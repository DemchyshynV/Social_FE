import {Component, Input, OnInit} from '@angular/core';
import {Body} from '../../shared/interfaces';
import {FormControl, FormGroup} from '@angular/forms';
import {MessageService} from '../../services/message.service';
import {Router} from '@angular/router';
import {Socket} from 'ngx-socket-io';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  @Input() body: Body[];
  private form: FormGroup;
  @Input() targetId: bigint;

  constructor(private messageService: MessageService, private router: Router, private socket: Socket) {
  }

  ngOnInit() {
    this.form = new FormGroup({
      message: new FormControl(null),
      id: new FormControl(null)
    });
    this.socket.on('message', (msg: Body) => {
      this.body.push(msg);
    });
  }

  send() {
    // console.log(this.form.value);
    this.messageService.addMessage(this.form.value.message, this.targetId).subscribe(() => {
      this.body.push({body: this.form.controls.message.value, me: true, id: this.targetId});
      this.socket.emit('message', {body: this.form.controls.message.value, me: false, id: this.targetId});
      this.form.reset();
    });

  }


}

import {Component, Input, OnInit} from '@angular/core';
import {Body} from "../../shared/interfaces";
import {FormControl, FormGroup} from "@angular/forms";
import {MessageService} from "../../services/message.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  @Input() body: Body[];
  private form: FormGroup;
  @Input() targetId: bigint;

  constructor(private messageService:MessageService, private router:Router) {
  }

  ngOnInit() {
    this.form = new FormGroup({
      message: new FormControl(null),
      id: new FormControl(null)
    });
  }

  send() {
    // console.log(this.form.value);
    this.messageService.addMessage(this.form.value.message, this.targetId).subscribe(() => {

      this.form.reset();

    })

  }


}

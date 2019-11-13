import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-site-layout',
  templateUrl: './site-layout.component.html',
  styleUrls: ['./site-layout.component.css']
})
export class SiteLayoutComponent implements OnInit {
    isAdmin:boolean = false;

  constructor(private auth: AuthService) {
  }

  ngOnInit() {
    for (const role of this.auth.getRoles()) {
      if (role === 'ROLE_ADMIN')
        this.isAdmin = true;
    }
  }


}

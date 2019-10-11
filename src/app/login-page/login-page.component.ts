import {Component, Injectable, OnInit} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
// import * as bcrypt from 'bcryptjs';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class LoginPageComponent implements OnInit {
  form: FormGroup;

  // saul: string;


  constructor(private auth: AuthService,
              private route: ActivatedRoute,
              private router: Router) {
    // this.saul = bcrypt.genSaltSync(10);
  }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required])
    });
    // this.route.queryParams.subscribe((params: Params) => {
    //   if (params['registered']) {
    //     // теперь можете войти в систему
    //   } else if (params['accessDenied']) {
    //     // Для начала зарегистрируйтесь в системе
    //   }
    // });
  }


  login(): void {
    // console.log(this.form.get('password').value);
    // this.form.get('password').setValue(bcrypt.hashSync(this.form.get('password').value, this.saul));
    console.log(this.form.value);
    this.auth.login(this.form.value).subscribe((res) => {
      console.log(res);
    });
  }

}

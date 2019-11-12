import {Component, Injectable, OnInit} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
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
    this.form.disable();
    console.log(this.form.value);
    this.auth.login(this.form.value).subscribe((res) => {
          this.router.navigate(['overview']);
    });
  }




}

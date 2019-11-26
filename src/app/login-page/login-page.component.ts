import {Component, Injectable, OnInit} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {HttpErrorResponse} from "@angular/common/http";
import {MatSnackBar} from "@angular/material/snack-bar";

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
              private router: Router,
              private matSnackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.auth.logout();
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required])
    });
    this.route.queryParams.subscribe((params: Params) => {
      if (params['registered']) {
        this.matSnackBar.open('Теперь Вы можете войти в систему');
      } else if (params['accessDenied']) {
        this.matSnackBar.open('Для начала зарегистрируйтесь в системе');
      } else if (params['sessionFailed']) {
        this.matSnackBar.open('Сессия закончилась, пожалуйста  зайдите в систему');
      } else if (params['ErrorLoginOrPassword']) {
        this.matSnackBar.open('Не правильный логин или параоль');
      }
    });

  }

  login(): void {
    this.form.disable();
    // console.log(this.form.value);
    this.auth.login(this.form.value).subscribe((res) => {
      this.router.navigate(['overview']);
    }, (err: HttpErrorResponse) => {
      if (err.status === 418) {
        this.router.navigate(['/login'], {
          queryParams: {
            ErrorLoginOrPassword: true
          }
        })
      }
      this.form.enable()
    })
  }


}

import {Component, OnInit} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {AbstractControl, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {Router} from '@angular/router';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const invalidCtrl = (form.control.hasError('notSame', 'passwords') && control.touched);
    return invalidCtrl;
  }
}

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {
  genders: string [] = ['MALE', 'FEMALE', 'OTHER', 'UNKNOWN'];
  form: FormGroup;
  matcher = new MyErrorStateMatcher();


  constructor(private auth: AuthService,
              private router: Router) {
  }

  ngOnInit() {

    this.form = new FormGroup({
      // user: new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      passwords: new FormGroup({
        password1: new FormControl(null, [Validators.required, Validators.minLength(6)]),
        password2: new FormControl(null, [Validators.required])
      }, this.passwordValidator),
      profile: new FormGroup({
      name: new FormControl(null, [Validators.required]),
      surname: new FormControl(),
      age: new FormControl(null, [Validators.required]),
      sex: new FormControl(null, [Validators.required])})
    });
    // });

  }

  passwordValidator(control: FormGroup): any {
    const pass = control.controls.password1.value;
    const confirmPass = control.controls.password2.value;
    console.log(pass);
    console.log(confirmPass);

    return pass === confirmPass ? null : {notSame: true};
  }


  register(): void {

    const password = this.form.controls.passwords.get('password1').value;
    this.form.addControl('password', new FormControl(password));
    // console.log(this.form.value);
    this.auth.register(this.form.value).subscribe((res) => {
      console.log(res);
      this.router.navigate(['/login']);
    });
    // console.log(this.form);
  }
}

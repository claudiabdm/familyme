import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'fm-login-form',
  templateUrl: './login-form.component.html',
})
export class LoginFormComponent implements OnInit {

  loginForm: FormGroup;
  isVisible: boolean = false;
  invalidUser: boolean = false;
  type: string = 'password';


  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
    this.loginForm.reset();
  }

  onSubmit(form: FormGroup) {
    // this.spinner.show();
    // if (form.valid) {
    //   this.authService.logIn(form.value)
    //     .subscribe(
    //       res => {
    //         if (res) {
    //           this.spinner.hide();
    //           Notification.requestPermission();
    //         } else {
    //           throwError('Something went wrong');
    //         }
    //       },
    //       error => {
    //         this.spinner.hide();
    //         this.invalidUser = error.status === 401;
    //       });
    // }
  }

  showPswd() {
    if (this.isVisible) {
      this.isVisible = false;
      this.type = 'password';
    } else {
      this.isVisible = true;
      this.type = 'text';
    }
  }

}

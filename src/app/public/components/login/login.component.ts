import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth-service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm: FormGroup = new FormGroup({
    email: new FormControl('cuc@gmail.com', [Validators.required, Validators.email]),
    password: new FormControl('123456', [Validators.required]),
  });

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  login() {
    if (!this.loginForm.valid) {
      return;
    }
    this.authService.login(this.loginForm.value).subscribe(() => {
      var x = localStorage.getItem("Username");
      const userData = JSON.stringify(x);
      const rawUserData = JSON.parse(userData);
      console.log({userData, rawUserData})
        this.router.navigate(['../../protected/dashboard'])});
  }

}

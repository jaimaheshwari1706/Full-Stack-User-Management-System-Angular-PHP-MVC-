import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SericeService } from '../serice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service: SericeService, private router: Router) { }

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });

  ngOnInit(): void { }

  login() {
    if (this.loginForm.valid) {
      // const { email, password } = this.loginForm.value;

      this.service.login(this.loginForm.value).subscribe((res: any) => {
        if (res.status == 'success') {
          console.log('Login successful:', res.user);
          this.service.isLoggedIn = true;
          this.router.navigate(['/dashboard']);
        }
      });
    }
  }

}

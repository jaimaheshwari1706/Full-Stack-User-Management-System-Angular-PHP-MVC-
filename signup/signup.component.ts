import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SericeService } from '../serice.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  valueCheck: number = 1;
  id: any;

  constructor(
    private service: SericeService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  create = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required)
  });

  ngOnInit(): void {
    const path = this.route.snapshot.url[0]?.path;

    if (path === 'signup') {
      this.valueCheck = 1;
    } else if (path === 'add') {
      this.valueCheck = 2;
    } else if (path === 'update') {
      this.valueCheck = 3;

      // Fetch user ID from route param
      this.route.paramMap.subscribe(params => {
        const id = params.get('id');
        if (id) {
          this.id = id; // Store for update use

          this.service.getUserById(id).subscribe((res: any) => {
            console.log('Fetched user for update:', res);
            this.create.patchValue({
              name: res.name,
              email: res.email,
              phone: res.phone,
              password: res.password,
              gender: res.gender
            });
          });
        }
      });
    }
  }



  signup(): void {
    if (this.create.valid) {
      this.service.userData(this.create.value).subscribe(res => {
        alert('Signup Successful!');
        this.router.navigate(['']);
      });
    } else {
      alert('Please fill in all required fields');
    }
  }

  add(): void {
    if (this.create.valid) {
      this.service.userData(this.create.value).subscribe(res => {
        alert('User Added!');
        this.router.navigate(['/table']);
      });
    } else {
      alert('Invalid form!');
    }
  }

  update() {
    this.service.updateUser(this.id, this.create.value).subscribe(res => {
      console.log('Updated Successfully', res);
      this.router.navigate(['/table']);
    });
  }

}

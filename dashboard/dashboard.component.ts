import { Component, OnInit } from '@angular/core';
import { SericeService } from '../serice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  valueCheck: boolean = false;
  dropdownVisible: boolean = false;
  users: any;

  constructor(private service: SericeService, private router: Router) {}

  ngOnInit(): void {

    const user = this.service.loggedInUser;

    if (user && user.gender === 'Female') {
      this.valueCheck = true;
    } else {
      this.valueCheck = false;
    }


  }

  onGenderChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    const selectedGender = target.value;

    if (selectedGender === 'Male' || selectedGender === 'Female') {
      this.service.selectedGender = selectedGender;
      this.router.navigate(['/table']);
    }
  }

  myFunction(): void {
    this.dropdownVisible = !this.dropdownVisible;
  }

  logout() {
    this.service.logout();
  }

}

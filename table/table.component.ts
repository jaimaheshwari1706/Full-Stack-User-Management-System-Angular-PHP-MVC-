import { ActivatedRoute, Router } from '@angular/router';
import { SericeService } from './../serice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  dropdownVisible: boolean = false;
  users: any[] = [];

  constructor(
    private service: SericeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  valueCheck: boolean = false;

  ngOnInit(): void {
    if (this.service.selectedGender) {
      this.service.getUsersGender(this.service.selectedGender).subscribe((res: any) => {
        this.users = res;
        console.log('Filtered Users:', this.users);
      });
    } else {
      this.service.gettable().subscribe((res: any) => {
        this.users = res;
        console.log('All Users:', this.users);
      });
    }
  }


  // Delete button functionality
  deleteBtn(id: any) {
    this.service.delete(id).subscribe(res => {
      console.log('Deleted Data:', res);
      this.ngOnInit();
    });
  }

  myFunction(): void {
    this.dropdownVisible = !this.dropdownVisible;
  }

  logout() {
    this.service.logout();
  }

}

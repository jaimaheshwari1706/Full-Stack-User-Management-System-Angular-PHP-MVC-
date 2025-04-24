import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SericeService {

  public selectedGender: string | null = null;
  public loggedInUser: any = null;
  public updateUserId: number | null = null;


  get isLoggedIn(): boolean {
    return localStorage.getItem('isLoggedIn') === 'true';
  }

  set isLoggedIn(value: boolean) {
    localStorage.setItem('isLoggedIn', value.toString());
  }

  constructor(private http: HttpClient,
    private router:Router
  ) { }


  logout() {
    this.isLoggedIn = false;
    this.router.navigate(['']);
    console.log('User logged out',  this.isLoggedIn);
  }

  login(data: any) {
    const formData = new FormData();
    formData.append('Arrar', JSON.stringify([data]));
    return this.http.post('http://localhost/HRMSGLOBALANG/task/login', formData);
  }

  signup(data: any) {
    return this.http.post('http://localhost/HRMSGLOBALANG/task/signup', data);
  }
  getUsersemail(email: string) {
    return this.http.get(`http://localhost/HRMSGLOBALANG/task/getUsersemail?email=${email}`);
  }
  getUsersGender(gender: string) {
    return this.http.get(`http://localhost/HRMSGLOBALANG/task/getUsersGender?gender=${gender}`);
  }

  gettable() {
    return this.http.get('http://localhost/HRMSGLOBALANG/task/getalldata');
  }

  userData(data: any) {
    const formData = new FormData();
    formData.append('Arrar', JSON.stringify([data])); // Notice [data]

    return this.http.post('http://localhost/HRMSGLOBALANG/task/addData', formData);
  }


  getUserById(id: any) {
    console.log('id:', id);

    return this.http.get(`http://localhost/HRMSGLOBALANG/task/getUserById?id=${id}`);
  }

  updateUser(id : any, data: any) {
    data.id = id;
    
    const data1 = new FormData();
    data1.append('Arrar', JSON.stringify([data]));

    return this.http.post(`http://localhost/HRMSGLOBALANG/task/updateData`, data1);
  }

  delete(id: any) {
    return this.http.delete(`http://localhost/HRMSGLOBALANG/task/deleteData?id=${id}`);
  }

}

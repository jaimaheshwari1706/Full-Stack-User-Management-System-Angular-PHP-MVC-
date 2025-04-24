import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SericeService } from './serice.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private service: SericeService, private router: Router) {}

  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   return true;
  // }

  canActivate(): boolean {
    if (this.service.isLoggedIn === true) {
      console.log('User is logged in:', this.service.isLoggedIn);

      return true;
    } else {
      console.log('User is not logged in:', this.service.isLoggedIn);

      this.router.navigate(['']);
      return false;
    }
  }

}

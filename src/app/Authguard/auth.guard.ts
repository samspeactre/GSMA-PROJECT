import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    if (localStorage.getItem('token')) {
      return true;  // Allow access to the route if token exists
    } else {
      this.router.navigate(['/login']);  // Redirect to login if token is missing
      return false;
    }
  }
}

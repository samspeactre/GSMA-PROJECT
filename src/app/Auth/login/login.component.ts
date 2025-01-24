import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginService } from '../../core/authService/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  rememberMe: boolean = false;
  errorMessage: string = '';

  constructor(private loginService: LoginService, private router: Router) {}

  onSubmit(): void {
    if (!this.email || !this.password) {
      this.errorMessage = 'Please enter both email and password.';
      return;
    }

    // Call the login service to authenticate the user
    this.loginService.loginUser(this.email, this.password).subscribe({
      next: (response: any) => {
        console.log('Login successful:', response);
        // if (response && response.token) {
        //   localStorage.setItem('token', response.token);
        //   this.router.navigate(['/dashboard']);
        // } else {
        //   console.error('Token not received in the response');
        //   this.errorMessage = 'Login failed. Please try again.';
        // }
      },
      error: (error: any) => {
        console.error('Login failed:', error);
        this.errorMessage = 'Invalid email or password. Please try again.';
      }
    });

  }
}

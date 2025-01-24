import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegisterService } from '../../core/authService/register.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private registerService: RegisterService,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      name: [''],
      email: [''],
      password: [''],
      confirmpassword: ['']
    });
  }

  // onSubmit(): void {
  //   if (this.registerForm.valid) {
  //     const { name, email, password, confirmpassword } = this.registerForm.value;

  //     if (password.trim() !== confirmpassword.trim()) {
  //       alert('Passwords do not match!');
  //       return;
  //     }

  //     const userData = { name, email, password, confirmpassword };

  //     this.registerService.registerUser(userData).subscribe({
  //       next: (response) => {
  //         alert('Registration successful!');
  //         this.router.navigate(['/login']);
  //       },
  //       error: (error) => {
  //         this.errorMessage = 'Registration failed. Please try again.';
  //         console.error('Error during registration:', error);
  //       }
  //     });
  //   } else {
  //     alert('Please fill in all fields correctly.');
  //   }
  // }
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {
  searchText: string = '';
  addPersonForm: FormGroup;
  showPassword: boolean = false;

  constructor(private fb: FormBuilder) {
    this.addPersonForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', [Validators.required, Validators.email]],
      sendEmail: [false],
      isActive: [false],
      accessLevel: ['Learner'],
      email: ['', Validators.email],
      disableEmailNotifications: [false],
      profileType: ['None'],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(
            /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/
          )
        ]
      ],
      title: [''],
      manager: [''],
      company: [''],
      website: [''],
      inactiveDate: [''],
      externalEmployeeId: [''],
      jobRole: [''],
      address1: [''],
      address2: [''],
      city: [''],
      state: [''],
      zipCode: [''],
      country: [''],
      timeZone: ['(UTC) coordinated universal time'],
      language: ['English'],
      dateFormat: [''],
      brand: ['Default'],
      workPhone: [''],
      mobilePhone: [''],
      enableTextNotifications: [false],
      skype: [''],
      twitter: ['']
    });
  }

  onSubmit(): void {
    if (this.addPersonForm.valid) {
      const formData = this.addPersonForm.value;

      // Simulate an API call
      this.simulateApiCall(formData).subscribe({
        next: (response) => {
          console.log('Simulated Response:', response);
          alert('Person added successfully!');
          this.addPersonForm.reset();
        },
        error: (error) => {
          console.error('Simulated Error:', error);
          alert('Failed to add person. Please try again later.');
        }
      });
    } else {
      alert('Please fill out all required fields!');
    }
  }

  // Simulated API call function
  private simulateApiCall(data: any): Observable<any> {
    console.log('Simulating API call with data:', data);
    return of({ success: true, message: 'User created successfully!' }).pipe(
      delay(1000) // Simulate network latency
    );
  }

  toggleShowPassword(): void {
    this.showPassword = !this.showPassword;
  }

  openDatepicker(input: HTMLInputElement): void {
    input.focus();
  }

  clearSearch(): void {
    this.searchText = '';
  }
}

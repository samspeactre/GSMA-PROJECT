import { Component } from '@angular/core';

@Component({
  selector: 'app-create-course',
  standalone: true,
  imports: [],
  templateUrl: './create-course.component.html',
  styleUrl: './create-course.component.css'
})
export class CreateCourseComponent {
  onSubmit() {
    alert('Course saved successfully!');
  }

  onCancel() {
    alert('Operation canceled!');
  }
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-all-courses',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './all-courses.component.html',
  styleUrl: './all-courses.component.css'
})
export class AllCoursesComponent {
  course = [
    { id: '1', imgsrc: '../../../../assets/img/course-img.png', title: 'Leadership Suite - Impostor Syndrome in New Managers 1.0', tag: 'Marketing Course', desc: 'Impostor syndrome is not a new concept in the business world. One area where it is noticeably prevalent is in new managers. In this course. ' },
    { id: '2', imgsrc: '../../../../assets/img/course-img.png', title: 'Leadership Suite - Impostor Syndrome in New Managers 1.0', tag: 'Marketing Course', desc: 'Impostor syndrome is not a new concept in the business world. One area where it is noticeably prevalent is in new managers. In this course. ' },
    { id: '3', imgsrc: '../../../../assets/img/course-img.png', title: 'Leadership Suite - Impostor Syndrome in New Managers 1.0', tag: 'Marketing Course', desc: 'Impostor syndrome is not a new concept in the business world. One area where it is noticeably prevalent is in new managers. In this course. ' },
    { id: '4', imgsrc: '../../../../assets/img/course-img.png', title: 'Leadership Suite - Impostor Syndrome in New Managers 1.0', tag: 'Marketing Course', desc: 'Impostor syndrome is not a new concept in the business world. One area where it is noticeably prevalent is in new managers. In this course. ' },

  ]

  displayCourses: any[] = []; // Array to hold currently visible courses
  currentIndex: number = 0; // Pointer to track loaded courses
  coursesPerPage: number = 12; // Number of courses to load per click

  constructor() {
    this.loadMoreCourses(); // Load initial 15 courses
  }

  // Method to load more courses
  loadMoreCourses(): void {
    const nextIndex = this.currentIndex + this.coursesPerPage;
    this.displayCourses = this.displayCourses.concat(
      this.course.slice(this.currentIndex, nextIndex)
    );
    this.currentIndex = nextIndex; // Update the current index
  }

  // Method to slice the description to the first 20 words
  getShortDescription(description: string, wordLimit: number = 15): string {
    const words = description.split(' ');
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(' ') + '...';
    } else {
      return description;
    }
  }
}

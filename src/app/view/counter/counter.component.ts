import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {

  items = [
    { imgSrc: '../../../assets/icons/total-course.svg', title: 'Courses Completed', count: 88, bgColor: '#0052CC38', color: '#4FADFF' },
    { imgSrc: '../../../assets/icons/total-user.svg', title: 'People Created', count: 260, bgColor: '#F79A1F38', color: '#F79A1F' },
    { imgSrc: '../../../assets/icons/never-login.svg', title: 'Never Logged In', count: 82, bgColor: '#FF6E6E38', color: '#FF6F6F' },
    { imgSrc: '../../../assets/icons/course-complete.svg', title: 'Courses Completed', count: 173, bgColor: '#90E99838', color: '#00CE15' },
  ];

  currentCounts: number[] = [];

  ngOnInit(): void {
    this.startCountdown();
  }

  startCountdown(): void {
    this.currentCounts = this.items.map(() => 0); // Initialize all counters to 0

    const intervals = this.items.map((item, index) => {
      const step = Math.ceil(item.count / 50); // Increment value per step
      return setInterval(() => {
        if (this.currentCounts[index] < item.count) {
          this.currentCounts[index] += step; // Increment counter
          if (this.currentCounts[index] > item.count) {
            this.currentCounts[index] = item.count; // Ensure it doesn't exceed target
          }
        } else {
          clearInterval(intervals[index]); // Clear interval for this counter when done
        }
      }, 30); // Speed of updates
    });
  }
}

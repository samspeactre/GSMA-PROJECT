import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, MatTableModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  items = [
    { imgSrc: '../../../assets/icons/total-course.svg', title: 'Total Courses', count: 88, bgColor: '#0052CC38', color: '#4FADFF' },
    { imgSrc: '../../../assets/icons/total-user.svg', title: 'Total Users', count: 260, bgColor: '#F79A1F38', color: '#F79A1F' },
    { imgSrc: '../../../assets/icons/active-course.svg', title: 'Active Courses', count: 82, bgColor: '#FF6E6E38', color: '#FF6F6F' },
    { imgSrc: '../../../assets/icons/active-user.svg', title: 'Active Users', count: 173, bgColor: '#90E99838', color: '#00CE15' },
  ];

  activity = [
    {
      img: '../../../assets/img/profile.png',
      name: 'Monika Ranson',
      detail: 'Be Closing 2.0',
      highlighted: '', // No highlighted text here
      time: 'Yesterday'
    },
    {
      img: '../../../assets/img/profile.png',
      name: 'Monika Ranson',
      detail: 'Gained a new achievement',
      highlighted: 'How to Handle Sales Objections 3.0',
      time: 'Yesterday'
    },
    {
      img: '../../../assets/img/profile.png',
      name: 'Monika Ranson',
      detail: 'Gained a new achievement',
      highlighted: 'Emotional Intelligence 3.0',
      time: 'Yesterday'
    },
    {
      img: '../../../assets/img/profile.png',
      name: 'Monika Ranson',
      detail: 'Gained a new achievement',
      highlighted: 'Social Selling 2.0',
      time: 'Yesterday'
    },
  ];

  moduleTable = [
    { Modules: 'SOTS Professionalism in the Workplace Assessment', Course: 'SOTS Professionalism in the Workplace', Type: 'Assesment', People: '02' },
    { Modules: 'SOTS Professionalism in the Workplace Assessment', Course: 'SOTS Professionalism in the Workplace', Type: 'Assesment', People: '02' },
    { Modules: 'SOTS Professionalism in the Workplace Assessment', Course: 'SOTS Professionalism in the Workplace', Type: 'Assesment', People: '02' },
  ];

  course = [
    {package: 'courses', description: 'SOTS Professionalism in the Workplace'},
    {package: 'courses', description: 'SOTS Travis Credit Union Branches'},
    {package: 'person', description: 'Adam LaFever'},
    {package: 'person', description: 'Tyron Blair'},
    {package: 'person', description: 'Jamaine Taylor'},
    {package: 'person', description: 'Rafael Rangel Huerta'},
    {package: 'person', description: 'Kenneth Jones'},
    {package: 'person', description: 'Juan Gamboa Zavala'},
    {package: 'person', description: 'Josiah Boone'},
    {package: 'person', description: 'Jesus Martinez'},
  ]

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

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ilt-schedule',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './ilt-schedule.component.html',
  styleUrls: ['./ilt-schedule.component.css'],
})
export class ILTScheduleComponent {
  // Sample event data
  events = [
    {
      sessionName: 'Session 1',
      moduleName: 'Module A',
      courseName: 'English Learning Course',
      location: '3857 Morris Street, Texas, US',
      date: '2025-01-17',
    },
    {
      sessionName: 'Session 2',
      moduleName: 'Module B',
      courseName: 'Course Y',
      location: '3982 Custer Street, Los Angelas, US',
      date: '2025-01-18',
    },
    {
      sessionName: 'Session 3',
      moduleName: 'Module C',
      courseName: 'Course Z',
      location: 'Room 103',
      date: '2025-01-17',
    },
  ];

  searchQuery: string = ''; // Holds the search input value
  selectedDate: string = ''; // Holds the selected date
  filteredEvents: any[] = []; // Initially, no events are displayed

  // Filters the events based on the selected date and search query
  filterEvents() {
    if (!this.selectedDate) {
      this.filteredEvents = []; // Clear events if no date is selected
      return;
    }

    this.filteredEvents = this.events.filter((event) => {
      const matchesDate = event.date === this.selectedDate;

      const matchesQuery =
        this.searchQuery === '' ||
        event.sessionName.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        event.moduleName.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        event.courseName.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        event.location.toLowerCase().includes(this.searchQuery.toLowerCase());

      return matchesDate && matchesQuery;
    });
  }
}

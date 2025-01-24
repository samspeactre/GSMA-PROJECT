import { Component, Input } from '@angular/core';
import { SearchBarComponent } from "../../../view/search-bar/search-bar.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProgressBarComponent } from '../../../view/progress-bar/progress-bar.component';

@Component({
  selector: 'app-content-people',
  standalone: true,
  imports: [SearchBarComponent, CommonModule, FormsModule, ProgressBarComponent],
  templateUrl: './content-people.component.html',
  styleUrl: './content-people.component.css'
})
export class ContentPeopleComponent {
  progress: number = 50;
  isDropdownOpen: boolean = false;

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  onProgressChange(updatedProgress: number) {
    this.progress = updatedProgress;
  }

  people = [
    { User: 'Monika Ransom', email: 'mransom@gsmasecurity.com', date: '10/01/2024', Status: 'Active', AddInfo: 'Not Started' },
    { User: 'John Doe', email: 'johndoe@example.com', date: '11/01/2024', Status: 'Inactive', AddInfo: 'Started' },
    { User: 'Jane Smith', email: 'janesmith@example.com', date: '12/01/2024', Status: 'Active', AddInfo: 'Started' },
    { User: 'Monika Ransom', email: 'mransom@gsmasecurity.com', date: '10/01/2024', Status: 'Active', AddInfo: 'Not Started' },
    { User: 'John Doe', email: 'johndoe@example.com', date: '11/01/2024', Status: 'Inactive', AddInfo: 'Started' },
    { User: 'Jane Smith', email: 'janesmith@example.com', date: '12/01/2024', Status: 'Active', AddInfo: 'Started' },
    { User: 'Monika Ransom', email: 'mransom@gsmasecurity.com', date: '10/01/2024', Status: 'Active', AddInfo: 'Not Started' },
    { User: 'John Doe', email: 'johndoe@example.com', date: '11/01/2024', Status: 'Inactive', AddInfo: 'Started' },
    { User: 'Jane Smith', email: 'janesmith@example.com', date: '12/01/2024', Status: 'Active', AddInfo: 'Started' },
    { User: 'Monika Ransom', email: 'mransom@gsmasecurity.com', date: '10/01/2024', Status: 'Active', AddInfo: 'Not Started' },
    { User: 'John Doe', email: 'johndoe@example.com', date: '11/01/2024', Status: 'Inactive', AddInfo: 'Started' },
    { User: 'Jane Smith', email: 'janesmith@example.com', date: '12/01/2024', Status: 'Active', AddInfo: 'Started' },
    { User: 'Monika Ransom', email: 'mransom@gsmasecurity.com', date: '10/01/2024', Status: 'Active', AddInfo: 'Not Started' },
    { User: 'John Doe', email: 'johndoe@example.com', date: '11/01/2024', Status: 'Inactive', AddInfo: 'Started' },
    { User: 'Jane Smith', email: 'janesmith@example.com', date: '12/01/2024', Status: 'Active', AddInfo: 'Started' },
    { User: 'Monika Ransom', email: 'mransom@gsmasecurity.com', date: '10/01/2024', Status: 'Active', AddInfo: 'Not Started' },
    { User: 'John Doe', email: 'johndoe@example.com', date: '11/01/2024', Status: 'Inactive', AddInfo: 'Started' },
    { User: 'Jane Smith', email: 'janesmith@example.com', date: '12/01/2024', Status: 'Active', AddInfo: 'Started' },
  ];

  filteredPeople = [...this.people];
  selectedFilters: string[] = [];
  searchTerm: string = '';

  onSearch(term: string): void {
    this.searchTerm = term.toLowerCase();
    this.applyFilters();
  }

  onFilter(filters: string[]): void {
    this.selectedFilters = filters;
    this.applyFilters();
  }

  applyFilters(): void {
    this.filteredPeople = this.people.filter((person) => {
      const matchesSearch = person.User.toLowerCase().includes(this.searchTerm);
      const matchesFilters =
        this.selectedFilters.length === 0 ||
        this.selectedFilters.includes(person.Status) ||
        this.selectedFilters.includes(person.AddInfo);
      return matchesSearch && matchesFilters;
    });
  }

  removeFilter(filter: string): void {
    this.selectedFilters = this.selectedFilters.filter((f) => f !== filter);
    this.applyFilters();
  }

  getFilterClass(filter: string): string {
    switch (filter) {
      case 'Active':
        return 'filter-active';
      case 'Inactive':
        return 'filter-inactive';
      case 'Started':
        return 'filter-started';
      case 'Not Started':
        return 'filter-not-started';
      default:
        return '';
    }
  }

}

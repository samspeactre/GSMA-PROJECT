import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-people-table',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './people-table.component.html',
  styleUrls: ['./people-table.component.css'],
})
export class PeopleTableComponent {
  @Input() searchQuery: string = '';

  users = Array.from({ length: 260 }, (_, i) => ({
    id: i + 1,
    name: i % 2 === 0 ? 'Abraham Martinez' : 'John Doe',
    email: `Abrahammartinez2001${i + 1}@gmail.com`,
    accessLevel: i % 2 === 0 ? 'Student' : 'Teacher',
    status: i % 2 === 0 ? 'Active' : 'InActive',
    lastLogin: `${9} months ago`,
    selected: false,
  }));

  // Pagination variables
  currentPage = 1;
  pageSize = 7;

  // Master checkbox selection
  masterSelected = false;

  get filteredUsers() {
    const query = this.searchQuery.toLowerCase();
    return this.users.filter(
      user =>
        user.name.toLowerCase().includes(query) ||
        user.email.toLowerCase().includes(query)
    );
  }

  toggleAllSelection() {
    this.masterSelected = !this.masterSelected;
    this.users.forEach(user => (user.selected = this.masterSelected));
  }

  toggleUserSelection() {
    // Check if all users across all pages are selected
    this.masterSelected = this.users.every(user => user.selected);
  }

  // Total selected users
  get selectedCount() {
    return this.users.filter(user => user.selected).length;
  }

  // Change page
  get paginatedUsers() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    return this.filteredUsers.slice(startIndex, endIndex);
  }

  get totalPages() {
    return Math.ceil(this.users.length / this.pageSize);
  }

  get paginationPages() {
    const pages = [];
    if (this.totalPages <= 5) {
      for (let i = 1; i <= this.totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (this.currentPage <= 3) {
        pages.push(1, 2, 3, '...', this.totalPages);
      } else if (this.currentPage > this.totalPages - 3) {
        pages.push(1, '...', this.totalPages - 3, this.totalPages - 2, this.totalPages - 1, this.totalPages);
      } else {
        pages.push(1, '...', this.currentPage - 1, this.currentPage, this.currentPage + 1, '...', this.totalPages);
      }
    }
    return pages;
  }

  changePage(page: number | string) {
    if (page === '...') return;
    this.currentPage = +page;
  }
}

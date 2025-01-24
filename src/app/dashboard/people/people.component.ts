import { Component } from '@angular/core';
import { SearchBarComponent } from '../../view/search-bar/search-bar.component';
import { PeopleTableComponent } from '../../view/people-table/people-table.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-people',
  standalone: true,
  imports: [SearchBarComponent, PeopleTableComponent, FormsModule, CommonModule],
  templateUrl: './people.component.html',
  styleUrl: './people.component.css'
})
export class PeopleComponent {

  searchQuery: string = '';

  onSearch(query: string): void {
    this.searchQuery = query.trim();
  }

  bulkActions = [
    { label: 'Active', value: 'activate' },
    { label: 'InActive', value: 'deactivate' },
  ];

  // Selected action
  selectedAction: string | null = null;

  // Recently viewed users
  recentlyViewed: string[] = [
    'Adam LaFever',
    'Tyron Blair',
    'Jamaine Taylor',
    'Rafael Rangel Huerta',
    'Kenneth Jones',
    'Juan Gamboa Zavala',
    'Josiah Boone',
    'Jesus Martinez',
  ];

  // Perform the bulk action
  performBulkAction() {
    if (this.selectedAction) {
      console.log(`Performing action: ${this.selectedAction}`);
      alert(`Action '${this.selectedAction}' applied to selected users!`);
    }
  }
}

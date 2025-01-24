import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  @Input() selectedFilters: string[] = []; // Receive selected filters from parent
  @Output() searchTerm = new EventEmitter<string>();
  @Output() filterSelected = new EventEmitter<string[]>();

  isFilterPanelVisible = false; // Toggle filter panel visibility
  filters = ['Active', 'Inactive', 'Started', 'Not Started']; // Available filters

  // Emit search term on change
  onSearchChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.searchTerm.emit(input.value);
  }

  // Toggle filter panel visibility
  toggleFilterPanel(): void {
    this.isFilterPanelVisible = !this.isFilterPanelVisible;
  }

  // Close filter panel
  closeFilterPanel(): void {
    this.isFilterPanelVisible = false;
  }

  // Handle filter selection
  toggleFilter(filter: string): void {
    if (this.selectedFilters.includes(filter)) {
      // Remove the filter from selectedFilters
      this.selectedFilters = this.selectedFilters.filter((f) => f !== filter);
    } else {
      // Add the filter to selectedFilters
      this.selectedFilters.push(filter);
    }
    this.filterSelected.emit(this.selectedFilters); // Emit selected filters to parent
  }

  // Clear all selected filters
  clearFilters(): void {
    this.selectedFilters = []; // Reset selected filters
    this.filterSelected.emit(this.selectedFilters); // Emit empty array to parent
  }
}

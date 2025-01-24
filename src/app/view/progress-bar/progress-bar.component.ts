import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  standalone: true,
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent {
  @Input() progress: number = 85;
  @Output() progressChange = new EventEmitter<number>(); // Emit progress changes to parent

  // Method to update progress dynamically
  updateProgress(newProgress: number): void {
    this.progress = newProgress;
    this.progressChange.emit(this.progress); // Emit updated progress
  }
}

import { Component, EventEmitter, Output } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-content-side-links',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './content-side-links.component.html',
  styleUrl: './content-side-links.component.css'
})
export class ContentSideLinksComponent {
  @Output() activeLinkChange = new EventEmitter<string>(); // Emit the active link
  activeLink: string = 'content'; // Default active link

  setActiveLink(link: string): void {
    this.activeLink = link;
    this.activeLinkChange.emit(link); // Notify parent of the active link change
  }
}

import { Component } from '@angular/core';
import { SearchBarComponent } from "../../../view/search-bar/search-bar.component";

@Component({
  selector: 'app-content-instructors',
  standalone: true,
  imports: [SearchBarComponent],
  templateUrl: './content-instructors.component.html',
  styleUrl: './content-instructors.component.css'
})
export class ContentInstructorsComponent {

}

import { Component } from '@angular/core';
import { SearchBarComponent } from "../../../view/search-bar/search-bar.component";

@Component({
  selector: 'app-content-learning',
  standalone: true,
  imports: [SearchBarComponent],
  templateUrl: './content-learning.component.html',
  styleUrl: './content-learning.component.css'
})
export class ContentLearningComponent {

}

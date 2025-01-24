import { Component } from '@angular/core';
import { SearchBarComponent } from "../../../view/search-bar/search-bar.component";

@Component({
  selector: 'app-content-teams',
  standalone: true,
  imports: [SearchBarComponent],
  templateUrl: './content-teams.component.html',
  styleUrl: './content-teams.component.css'
})
export class ContentTeamsComponent {

}

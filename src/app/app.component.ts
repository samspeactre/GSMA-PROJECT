import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';  // Just import RouterModule
import { routes } from './app.routes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],  // Only import RouterModule, without forRoot()
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gsma';
}

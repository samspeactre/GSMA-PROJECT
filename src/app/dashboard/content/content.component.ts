import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TraningSliderComponent } from '../../view/traning-slider/traning-slider.component';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [CommonModule, TraningSliderComponent, RouterModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  searchQuery: string = '';
  isChildRoute: boolean = false;

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      // Hide the content when navigating to any child route
      this.isChildRoute = this.router.url.includes('/dashboard/content/all-courses');
    });
   }

  course = [
    { imgsrc: '../../../assets/img/content-course.svg', head: 'SOTS Professionalism in the Workplace', tag: 'course' },
    { imgsrc: '../../../assets/img/content-course.svg', head: 'SOTS Travis Credit Union Branches', tag: 'course' },
    { imgsrc: '../../../assets/img/content-course.svg', head: 'SOTS Toxic Gossip  (2-Hours)', tag: 'course' },
    { imgsrc: '../../../assets/img/content-course.svg', head: 'SOTS Tourniquet Skills', tag: 'course' },
  ]

  onSearch() {
    console.log("Search Query:", this.searchQuery);
  }



}

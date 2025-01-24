import { Component } from '@angular/core';
import { ContentSideLinksComponent } from '../content-side-links/content-side-links.component';
import { CommonModule } from '@angular/common';
import { ContentModuleComponent } from "../content-module/content-module.component";
import { ContentPeopleComponent } from '../content-people/content-people.component';
import { ContentLearningComponent } from '../content-learning/content-learning.component';
import { ContentTeamsComponent } from '../content-teams/content-teams.component';
import { ContentInstructorsComponent } from "../content-instructors/content-instructors.component";
import { ContentNoticeboardComponent } from "../content-noticeboard/content-noticeboard.component";
import { ContentReferencesComponent } from "../content-references/content-references.component";
import { ContentRatingsComponent } from "../content-ratings/content-ratings.component";
import { ContentHistoryComponent } from '../content-history/content-history.component';

@Component({
  selector: 'app-course-details',
  standalone: true,
  imports: [ContentSideLinksComponent, CommonModule, ContentModuleComponent, ContentPeopleComponent, ContentLearningComponent, ContentTeamsComponent, ContentInstructorsComponent, ContentNoticeboardComponent, ContentReferencesComponent, ContentRatingsComponent, ContentHistoryComponent],
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.css'
})

export class CourseDetailsComponent {
  activeComponent: string = 'content';

  onActiveLinkChange(link: string): void {
    this.activeComponent = link;
  }
}

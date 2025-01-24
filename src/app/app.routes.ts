import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Auth/login/login.component';
import { RegisterComponent } from './Auth/register/register.component';
import { LayoutComponent } from './dashboard/layout/layout.component';
import { ContentComponent } from './dashboard/content/content.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { PeopleComponent } from './dashboard/people/people.component';
import { TeamsComponent } from './dashboard/teams/teams.component';
import { ReportsComponent } from './dashboard/reports/reports.component';
import { CreateCourseComponent } from './dashboard/headerPages/create-course/create-course.component';
import { CreateUserComponent } from './dashboard/headerPages/create-user/create-user.component';
import { CreateTeamComponent } from './dashboard/headerPages/create-team/create-team.component';
import { ILTScheduleComponent } from './dashboard/headerPages/ilt-schedule/ilt-schedule.component';
import { AllCoursesComponent } from './dashboard/contentPages/all-courses/all-courses.component';
import { CourseDetailsComponent } from './dashboard/contentPages/course-details/course-details.component';

export const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  {
    path: 'dashboard',
    component: LayoutComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'content', component: ContentComponent },
      { path: 'content/all-courses', component: AllCoursesComponent },
      { path: 'content/course-details/:id', component: CourseDetailsComponent },
      { path: 'people', component: PeopleComponent },
      { path: 'team', component: TeamsComponent },
      { path: 'reports', component: ReportsComponent },
      { path: 'create-course', component: CreateCourseComponent },
      { path: 'create-user', component: CreateUserComponent },
      { path: 'create-team', component: CreateTeamComponent },
      { path: 'ilt-schedule', component: ILTScheduleComponent },
    ]
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: LoginComponent },
];


import { Component } from '@angular/core';
import { CounterComponent } from '../../view/counter/counter.component';
import { CommonModule } from '@angular/common';
import { BlueGraphComponent } from '../../view/blue-graph/blue-graph.component';
import { MultiGraphComponent } from '../../view/multi-graph/multi-graph.component';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { FormsModule } from '@angular/forms';
import { LineChartComponent } from '../../view/line-chart/line-chart.component';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [CounterComponent, CommonModule, BlueGraphComponent, MultiGraphComponent, FormsModule, LineChartComponent],
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css'],
  animations: [
    trigger('fadeAnimation', [
      state('void', style({ opacity: 0 })),
      transition(':enter, :leave', [animate('300ms ease-in-out')]),
    ]),
  ],
})
export class ReportsComponent {
  activeTab: number = 0;

  tabs: {
    label: string; table: {
      reportName: string;
      reportType: string;
      createdBy: string;
      sharedWith: string;
      lastModified: string;
      schedule: string
      reportSchedule: string
    }[]
  }[] = [

      {
        label: 'Created by me',
        table: [
          {
            reportName: 'Expired License Report',
            reportSchedule: 'Weekly',
            reportType: 'Reporting Engine',
            createdBy: 'Janine Peddicord',
            sharedWith: '',
            lastModified: '21 months ago',
            schedule: 'Weekly',
          },
          {
            reportName: 'completed course reports/Login',
            reportSchedule: '1st of every month',
            reportType: 'Reporting Engine',
            createdBy: 'Janine Peddicord',
            sharedWith: '',
            lastModified: '21 months ago',
            schedule: 'Weekly',
          },
        ],
      },
      {
        label: 'Shared with me',
        table: [], // Empty table for demonstration
      },
    ];

  // Change the active tab
  selectTab(index: number): void {
    this.activeTab = index;
  }

  // Get count of rows in a table
  getRowCount(index: number): number {
    return this.tabs[index]?.table?.length || 0;
  }

  quickReports : string[] = [
    'Learning Paths',
    'Courses',
    'People',
    'Teams',
    'Modules',
    'Assessment',
    'Survey',
    'Scorm or Tin Can',
    'Compliance Summary',
    'Achievements',
    'Points And Badges',
    'ILT',
  ];

  usageReports : string[] = [
    'login activity',
    'never logged in',
    'login analytics',
    'ecommerce purchases',
    'self signup',
    'reminder history',
  ];
}

import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-teams',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css'],
  animations: [
    trigger('fadeAnimation', [
      state('void', style({ opacity: 0 })),
      transition(':enter, :leave', [animate('300ms ease-in-out')]),
    ]),
  ],
})
export class TeamsComponent {
  activeTab = 0;
  currentTeamIndex = 0; // For "Teams" tab

  tabs = [
    {
      label: 'Teams',
      teams: [
        {
          title: 'Team Name',
          list: [
            'Alcatraz - EMT',
            'AMOC',
            'Patrol Officers : <br/> Antioch Patrol 1 and 2',
            'Beck Development - Colonial Plaza',
            'Dispatch',
            'DMEA',
            'Drivers',
            'Field Inspector',
            'GAF',
            'Kelly Condominiums',
            'Lakeside plaza',
            'Lakewood Mall',
            'Maritime Museum',
          ],
        },
        {
          title: 'AMOC',
          list: ['Person A', 'Person B', 'Person C', 'Person D'],
        },
        {
          title: 'Patrol Officers : Antioch Patrol 1 and 2',
          list: ['Officer X', 'Officer Y', 'Officer Z'],
        },
        {
          title: 'Beck Development - Colonial Plaza',
          list: ['Developer 1', 'Developer 2', 'Developer 3'],
        },
      ],
    },
    {
      label: 'Chart View',
      teams: [
        {
          title: 'Chart Group 1',
          list: ['Chart A', 'Chart B', 'Chart C', 'Chart D', 'Chart E'],
        },
        {
          title: 'Chart Group 2',
          list: ['Chart X', 'Chart Y', 'Chart Z'],
        },
      ],
    },
    {
      label: 'Tree View',
      teams: [
        {
          title: 'Tree Node 1',
          list: ['Node A', 'Node B', 'Node C', 'Node D'],
        },
        {
          title: 'Tree Node 2',
          list: ['Node X', 'Node Y', 'Node Z'],
        },
      ],
    },
  ];

  // Get the total number of teams in the current tab
  get totalTeams() {
    return this.tabs[this.activeTab].teams.length;
  }

  // Get the currently active team's title
  get currentTeamTitle() {
    const activeTeams = this.tabs[this.activeTab].teams;
    return activeTeams[this.currentTeamIndex]?.title || '';
  }

  // Get the full list of the currently active team
  get currentTeamList() {
    const activeTeams = this.tabs[this.activeTab].teams;
    return activeTeams[this.currentTeamIndex]?.list || [];
  }

  // Generate pagination pages for teams
  get paginationPages(): number[] {
    const pages = [];
    for (let i = 1; i <= this.totalTeams; i++) {
      pages.push(i);
    }
    return pages;
  }

  // Change the team in the active tab
  changeTeam(index: number) {
    this.currentTeamIndex = index;
  }

  // Change the active tab
  selectTab(index: number) {
    this.activeTab = index;
    this.currentTeamIndex = 0; // Reset to the first team in the new tab
  }
}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart, LinearScale, BarElement, Title, CategoryScale, BarController } from 'chart.js';

Chart.register(LinearScale, BarElement, Title, CategoryScale, BarController);

@Component({
  selector: 'app-multi-graph',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './multi-graph.component.html',
  styleUrl: './multi-graph.component.css'
})
export class MultiGraphComponent implements OnInit {
  ngOnInit() {
    const multiChart = new Chart("multiChart", {
      type: 'bar',
      data: {
        labels: ['0', '1', '2', '3', '4', '5'],
        datasets: [{
          label: '# of Votes',
          data: [3, 4, 1.5, 2.5, 1.8, 3.8],
          backgroundColor: [
            '#66bb6a',
            '#f79a1f',
            '#6277F0',
            '#D950FF',
            '#FF6E90',
            '#6277F0',
          ],
          barThickness: 43
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false, // Ensures canvas respects CSS width/height
        scales: {
          x: {
            grid: {
              display: false, // Hides the gridlines on the x-axis
            },
            ticks: {
              padding: 13,
              font: {
                size: 9
              },
            }
          },
          y: {
            beginAtZero: true,
            ticks: {
              stepSize: 1,
              padding: 11,
              font: {
                size: 9
              }
            },
            grid: {
              color: '#e8e8e8'
            }
          }
        },
        plugins: {
          legend: {
            display: false
          }
        }
      }

    });
  }

  multiLabel = [
    {name: 'Monika Ransom', color: '#66BB6A'},
    {name: 'Jamaine Taylor', color: '#F79A1F'},
    {name: 'Josiah Boone', color: '#6277F0'},
    {name: 'John Doe', color: '#D950FF'},
    {name: 'Clark Kent', color: '#FF6E90'},
    {name: 'Mitchel Marsh', color: '#FF6E90'}
  ]
}

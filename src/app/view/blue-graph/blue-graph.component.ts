import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart, LinearScale, BarElement, Title, CategoryScale, BarController } from 'chart.js';

Chart.register(LinearScale, BarElement, Title, CategoryScale, BarController);

@Component({
  selector: 'app-blue-graph',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blue-graph.component.html',
  styleUrls: ['./blue-graph.component.css']
})
export class BlueGraphComponent implements OnInit {
  ngOnInit() {
    const myChart = new Chart("myChart", {
      type: 'bar',
      data: {
        labels: ['0', '1', '2', '3', '4', '5'],
        datasets: [{
          label: '# of Votes',
          data: [3, 4, 1.5, 2.5, 1.8, 3.8],
          backgroundColor: '#6277f0',
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
}

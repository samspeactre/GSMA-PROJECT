import { Component, OnInit } from '@angular/core';
import {
  Chart,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Tooltip,
  Legend,
  ChartConfiguration,
  ChartType
} from 'chart.js';

Chart.register(
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Tooltip,
  Legend
);

@Component({
  selector: 'app-line-chart',
  standalone: true,
  imports: [],
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {
  ngOnInit() {
    const labels = ['01 Nov', '05 Nov', '10 Nov', '15 Nov', '20 Nov', '25 Nov', '30 Nov', '05 Dec', '10 Dec', '15 Dec'];
    const data = {
      labels: labels,
      datasets: [
        {
          label: 'Sample Data',
          data: [2, 3, 5, 1, 2, 4, 1, 0, 1, 4], // Match the graph's data points
          fill: false,
          borderColor: '#6277f0', // Blue line
          backgroundColor: '#6277f0', // Blue dots
          tension: 0.3, // Smooth curve
          pointRadius: 3, // Size of points
          pointHoverRadius: 5, // Size of points on hover
          borderWidth: 1.5, // stroke of line
        }
      ]
    };

    const config: ChartConfiguration<'line'> = {
      type: 'line', // Type is explicitly set to 'line'
      data: data,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            ticks: {
              font: {
                size: 7 // Adjust font size for x-axis
              }
            },
            grid: {
              color: '#f4f4f4', // Set the x-axis border color
            }
          },
          y: {
            beginAtZero: true,
            ticks: {
              stepSize: 1, // Increment by 1
              font: {
                size: 7 // Adjust font size for y-axis
              }
            }
          }
        },
        plugins: {
          legend: {
            display: false // Hide legend
          }
        }
      }
    };

    // Render the chart
    const lineChart = new Chart('lineChart', config);
  }
}

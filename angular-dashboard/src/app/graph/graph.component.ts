import { Component, OnInit } from '@angular/core';

import { Chart } from 'angular-highcharts';
import { TicketsService } from '../services/tickets.service';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit  { 

  chart: Chart;

  constructor(private service: TicketsService) {
  }

  ngOnInit() {
    const date = new Date();
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);

    this.getData(firstDay, 'task');
    this.getData(firstDay, 'support');
    this.getData(firstDay, 'order');
    this.getData(firstDay, 'comment');

    this.chart = this.createNewChart(firstDay);
  }

  getData(date: Date, type: string): void {
    this.service.getGraphDataByMonth(date, type)
      .subscribe(data => {
        this.chart.addSerie({
          name: type,
          data
        });
      });
  }

  createNewChart(startDate: Date): Chart {
    return new Chart({
      chart: {
        type: 'area'
      },
      xAxis: {
        type: 'datetime',
        labels: {
          overflow: 'justify'
        }
      },
      plotOptions: {
        area: {
          pointInterval: 24 * 3600000, // one day
          pointStart: Date.UTC(startDate.getFullYear(), startDate.getMonth(), 1, 0, 0, 0),
          marker: {
            enabled: false,
            symbol: 'circle',
            radius: 2,
            states: {
              hover: {
                enabled: true
              }
            }
          }
        }
      },
      title: {
        text: 'Different tickets over month'
      },
      credits: {
        enabled: false
      }
    });
  }

}

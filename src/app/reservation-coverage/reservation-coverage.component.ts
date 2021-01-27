import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

export interface PeriodicElement {
  instanceType: string;
  demandHour: number;
  reversedHour: number;
  totalHour: number;
  coverage: number;
}

@Component({
  selector: 'app-reservation-coverage',
  templateUrl: './reservation-coverage.component.html',
  styleUrls: ['./reservation-coverage.component.css']
})
export class ReservationCoverageComponent implements OnInit {



  constructor() { }

  ngOnInit(): void {
  }
  
  public instances = [
    {
      instanceType: 'T2 MEDIUM', 
      demandHour: 1021.22, 
      reversedHour: 0.0, 
      totalHour: 1021.22, 
      coverage: 0.0,
    },
    {
      instanceType: 'T2 NANO', 
      demandHour: 2184.93, 
      reversedHour: 0.0, 
      totalHour: 2184.93, 
      coverage: 0.0,
    },
    {
      instanceType: 'T2 LARGE', 
      demandHour: 1283.9, 
      reversedHour: 0.0, 
      totalHour: 1283.9, 
      coverage: 0.0,
    },
    {
      instanceType: 'M4 LARGE', 
      demandHour: 5.4, 
      reversedHour: 0.0, 
      totalHour: 5.4, 
      coverage: 0.0,
    },
    {
      instanceType: 'T2 MICRO', 
      demandHour: 5818.26, 
      reversedHour: 0.0, 
      totalHour: 5818.26, 
      coverage: 0.0,
    },
    {
      instanceType: 'M3 MEDIUM', 
      demandHour: 2.22, 
      reversedHour: 0.0, 
      totalHour: 2.22, 
      coverage: 0.0,
    },
    {
      instanceType: 'T2 SMALL', 
      demandHour: 2754.13, 
      reversedHour: 0.0, 
      totalHour: 2754.13, 
      coverage: 0.0,
    },
  ];

  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = [this.instances[0].instanceType, this.instances[1].instanceType, this.instances[2].instanceType, this.instances[3].instanceType, this.instances[4].instanceType, this.instances[5].instanceType, this.instances[6].instanceType];
  public barChartType: ChartType = 'horizontalBar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
    { data: [this.instances[0].demandHour, this.instances[1].demandHour, this.instances[2].demandHour, this.instances[3].demandHour, this.instances[4].demandHour, this.instances[5].demandHour, this.instances[6].demandHour, 0]}
  ];
}

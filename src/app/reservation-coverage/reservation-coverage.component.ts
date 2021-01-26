import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

export interface PeriodicElement {
  name: number;
  position: string;
  weight: number;
  symbol: number;
  coverage: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 'T2 MEDIUM', name: 1021.22, weight: 0.0, symbol: 1021.22, coverage: 0.0},
  {position: 'T2 NANO', name: 2184.93, weight: 0.0, symbol: 2184.93, coverage: 0.0},
  {position: 'T2 LARGE', name: 1283.9, weight: 0.0, symbol: 1283.9, coverage: 0.0},
  {position: 'M4 LARGE', name: 5.4, weight: 0.0, symbol: 5.4, coverage: 0.0},
  {position: 'T2 MICRO', name: 5818.26, weight: 0.0, symbol: 5818.26, coverage: 0.0},
  {position: 'M3 MEDIUM', name: 2.22, weight: 0.0, symbol: 2.22, coverage: 0.0},
  {position: 'T2 SMALL', name: 2754.13, weight: 0.0, symbol: 2754.13, coverage: 0.0},
];


@Component({
  selector: 'app-reservation-coverage',
  templateUrl: './reservation-coverage.component.html',
  styleUrls: ['./reservation-coverage.component.css']
})
export class ReservationCoverageComponent implements OnInit {

  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType: ChartType = 'horizontalBar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' }
  ];

  constructor() { }

  ngOnInit(): void {
  }
  
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'coverage'];
  dataSource = ELEMENT_DATA;

}

import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

export interface PeriodicElement {
  currency: string;
  service: string;
}

@Component({
  selector: 'app-service-breakdown',
  templateUrl: './service-breakdown.component.html',
  styleUrls: ['./service-breakdown.component.css']
})
export class ServiceBreakdownComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  formatMoney(money: number, formatCur: string){
    var formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: formatCur,
    
      // These options are needed to round to whole numbers if that's what you want.
      //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
      //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
    });
    
    return formatter.format(money); /* $2,500.00 */
  }

  ELEMENT_DATA: PeriodicElement[] = [
    {service: 'EC2', currency: this.formatMoney(2055.97,"USD")},
    {service: 'EFS', currency: this.formatMoney(0.00,"USD")},
    {service: 'OTHER', currency: this.formatMoney(234.32,"USD")},
    {service: 'S3', currency: this.formatMoney(10.69,"USD")},
    {service: 'SUPPORT', currency: this.formatMoney(0.00,"USD")},
    {service: 'TOTAL', currency: this.formatMoney(2300.97,"USD")},
  ];

  displayedColumns: string[] = ['service', 'currency'];
  dataSource = this.ELEMENT_DATA;

  public doughnutChartLabels: Label[] = ['EC2', 'EFS', 'OTHER', 'S3', 'SUPPORT'];
  public doughnutChartData: MultiDataSet = [
    [2055.97, 1000.00, 234.32, 100.69, 1000.00],
  ];
  public doughnutChartType: ChartType = 'doughnut';

}

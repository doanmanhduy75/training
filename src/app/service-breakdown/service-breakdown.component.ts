import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label, Color } from 'ng2-charts';

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

  constructor() {
   }

  ngOnInit(): void {
    console.log(this.vars);
    console.log(this.doughnutChartColor)
  }

  public cur = [2055.97, 1000.00, 2340.32, 102.69, 150.00, 2300.97];

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


  public vars = [
    {
      service: 'EC2',
      currency: this.formatMoney(this.cur[0],"USD"),
      color: "#4496d1"
    },
    {
      service: 'EFS',
      currency: this.formatMoney(this.cur[1],"USD"),
      color: "#779b3e"
    },
    {
      service: 'OTHER',
      currency: this.formatMoney(this.cur[2],"USD"),
      color: "#c0432c"
    },
    {
      service: 'S3',
      currency: this.formatMoney(this.cur[3],"USD"),
      color: "#fa822a"
    },
    {
      service: 'SUPPORT',
      currency: this.formatMoney(this.cur[4],"USD"),
      color: "#df9c18"
    },
    {
      service: 'TOTAL',
      currency: this.formatMoney(this.cur[5],"USD"),
    },
  ];

  // ELEMENT_DATA: PeriodicElement[] = [
  //   {service: 'EC2', currency: this.formatMoney(2055.97,"USD")},
  //   {service: 'EFS', currency: this.formatMoney(0.00,"USD")},
  //   {service: 'OTHER', currency: this.formatMoney(234.32,"USD")},
  //   {service: 'S3', currency: this.formatMoney(10.69,"USD")},
  //   {service: 'SUPPORT', currency: this.formatMoney(0.00,"USD")},
  //   {service: 'TOTAL', currency: this.formatMoney(2300.97,"USD")},
  // ];

  // displayedColumns: string[] = ['service', 'currency'];
  // dataSource = this.ELEMENT_DATA;
  public doughnutChartColor: Color[] = [{
    backgroundColor: [this.vars[0].color!,this.vars[1].color!,this.vars[2].color!,this.vars[3].color!,this.vars[4].color!]
  }];

  public doughnutChartLabels: Label[] = [this.vars[0].service, this.vars[1].service, this.vars[2].service, this.vars[3].service, this.vars[4].service];
  public doughnutChartData: MultiDataSet = [
    [this.cur[0], this.cur[1], this.cur[2], this.cur[3], this.cur[4]],
  ];
  public doughnutChartType: ChartType = 'doughnut';

}

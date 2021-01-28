import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label, Color } from 'ng2-charts';
import { ServiceBreakdownService } from './service-breakdown.service';

export interface PeriodicElement {
  name: string;
  price: number;
  currency: string;
  color: string;
  totalResult: number;
}

@Component({
  selector: 'app-service-breakdown',
  templateUrl: './service-breakdown.component.html',
  styleUrls: ['./service-breakdown.component.css']
})

export class ServiceBreakdownComponent implements OnInit {

  constructor(private service: ServiceBreakdownService) {
   }

  ngOnInit(): void {
    this.service.getService().subscribe(val => {
      this.vars = val;
      this.doughnutChartColor = [{backgroundColor: [this.vars[0].color!,this.vars[1].color!,this.vars[2].color!,this.vars[3].color!,this.vars[4].color!]}];
      this.doughnutChartLabels = [this.vars[0].name, this.vars[1].name, this.vars[2].name, this.vars[3].name, this.vars[4].name];
      this.doughnutChartData = [this.vars[0].price, this.vars[1].price, this.vars[2].price, this.vars[3].price, this.vars[4].price];
      this.totalResult = this.vars[0].price + this.vars[1].price + this.vars[2].price + this.vars[3].price + this.vars[4].price;
      this.unit = this.vars[0].currency
    })
  }

  public vars: any = [];

  public doughnutChartColor: Color[] = [];

  public doughnutChartLabels: Label[] = [];

  public doughnutChartData: MultiDataSet = [];

  public doughnutChartType: ChartType = 'doughnut';

  public totalResult: number = 0;

  public unit: string = '';
}

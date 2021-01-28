import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { ReservationCoverageService } from './reservation-coverage.service';

@Component({
  selector: 'app-reservation-coverage',
  templateUrl: './reservation-coverage.component.html',
  styleUrls: ['./reservation-coverage.component.css']
})
export class ReservationCoverageComponent implements OnInit {

  constructor(private reservation: ReservationCoverageService) { }

  ngOnInit(): void {
    this.reservation.getReservation().subscribe(res => {
      this.vars = res;
      this.barChartLabels = [this.vars[0].name, this.vars[1].name, this.vars[2].name, this.vars[3].name, this.vars[4].name, this.vars[5].name];
      this.barChartData = [{data: [this.vars[0].demand, this.vars[1].demand, this.vars[2].demand, this.vars[3].demand, this.vars[4].demand, this.vars[5].demand, 0]}]
    })
      
  }

  public vars: any = [];
  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = [];
  public barChartType: ChartType = 'horizontalBar';
  public barChartLegend = true;
  public barChartPlugins = [];
  public barChartData: ChartDataSets[] = [];
  public barChartColors: Color[] = [{backgroundColor: "#d99387"},];
}

import { Component, OnInit } from '@angular/core';
import { CostingService } from './costing.service';

export interface PeriodicElement {
  name: string;
  value: number;
  curUnit: string;
}

@Component({
  selector: 'app-costing',
  templateUrl: './costing.component.html',
  styleUrls: ['./costing.component.css']
})
export class CostingComponent implements OnInit {

  constructor(private cost: CostingService) { }

  ngOnInit(): void {
    this.cost.getCosting().subscribe(val => {this.vars = val;})
  }

  vars : any = []
}

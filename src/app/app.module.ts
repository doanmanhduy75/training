import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CostingComponent } from './costing/costing.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import { ServiceBreakdownComponent } from './service-breakdown/service-breakdown.component';
import {MatTableModule} from '@angular/material/table';
import { ChartsModule } from 'ng2-charts';
import { ReservationCoverageComponent } from './reservation-coverage/reservation-coverage.component';

@NgModule({
  declarations: [
    AppComponent,
    CostingComponent,
    ServiceBreakdownComponent,
    ReservationCoverageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatTableModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

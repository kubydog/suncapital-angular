import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { ManagementRoutingModule } from './management-routing.module';
import { NavigationComponent } from './navigation/navigation.component';
import { MenuComponent } from './menu/menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManagementComponent } from './management/management.component';
import { ClientsComponent } from './clients/clients.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { ClientAddComponent } from './client-add/client-add.component';

@NgModule({
  imports: [
    CommonModule,
    ManagementRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [
    NavigationComponent,
    MenuComponent,
    DashboardComponent,
    ManagementComponent,
    ClientsComponent,
    TransactionsComponent,
    StatisticsComponent,
    ClientAddComponent
  ]
})
export class ManagementModule { }

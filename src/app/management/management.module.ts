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
import { ClientDetailComponent } from './client-detail/client-detail.component';
import { ClientEditComponent } from './client-edit/client-edit.component';
import { AccountWindowComponent } from './account-window/account-window.component';
import { TransactionDetailComponent } from './transaction-detail/transaction-detail.component';

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
    ClientAddComponent,
    ClientDetailComponent,
    ClientEditComponent,
    AccountWindowComponent,
    TransactionDetailComponent
  ]
})
export class ManagementModule { }

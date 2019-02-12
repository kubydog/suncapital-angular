import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManagementComponent } from './management/management.component';
import { ClientsComponent } from './clients/clients.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { StatisticsComponent } from './statistics/statistics.component';
import {ClientAddComponent} from './client-add/client-add.component';
import {ClientDetailComponent} from './client-detail/client-detail.component';

const routes: Routes = [
  {
    path: 'app',
    component: ManagementComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'clients',
        component: ClientsComponent
      },
      {
        path: 'transactions',
        component: TransactionsComponent
      },
      {
        path: 'statistics',
        component: StatisticsComponent
      },
      {
        path: 'clients/add',
        component: ClientAddComponent
      },
      {
        path: 'client/:id',
        component: ClientDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagementRoutingModule { }

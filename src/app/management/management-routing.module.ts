import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManagementComponent } from './management/management.component';
import { ClientsComponent } from './clients/clients.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { StatisticsComponent } from './statistics/statistics.component';
import {ClientAddComponent} from './client-add/client-add.component';
import {ClientDetailComponent} from './client-detail/client-detail.component';
import {ClientEditComponent} from './client-edit/client-edit.component';
import {TransactionDetailComponent} from './transaction-detail/transaction-detail.component';

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
        path: 'client/add',
        component: ClientAddComponent
      },
      {
        path: 'client/:id',
        component: ClientDetailComponent
      },
      {
        path: 'client/edit/:id',
        component: ClientEditComponent
      },
      {
        path: 'transaction/:id',
        component: TransactionDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagementRoutingModule { }

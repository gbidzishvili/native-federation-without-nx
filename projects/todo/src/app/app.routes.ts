import { Routes } from '@angular/router';
import { TodoDashboardComponent } from './todo-dashboard/todo-dashboard.component';
import { TodoPaymentsComponent } from './todo-payments/todo-payments.component';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: TodoDashboardComponent },
  { path: 'pay', component: TodoPaymentsComponent },
];

import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/native-federation';
import { HomeComponent } from './pages/home/home.component';
import { FlightsComponent } from './pages/home/flights/flights.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'flights', component: FlightsComponent },

  {
    path: 'todo',
    loadChildren: () =>
      loadRemoteModule('todo', './routes').then((m) => m.routes),
  },
  {
    path: '**',
    component: HomeComponent,
  },
];

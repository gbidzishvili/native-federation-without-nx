import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-todo-todo-dashboard',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './todo-dashboard.component.html',
  styleUrl: './todo-dashboard.component.css',
})
export class TodoDashboardComponent {}

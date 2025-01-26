import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-shell-flights',
  imports: [RouterLink],
  standalone: true,
  templateUrl: './flights.component.html',
  styleUrl: './flights.component.css',
})
export class FlightsComponent {
  router = inject(Router);
  goTo() {
    this.router.navigate(['/home']);
  }
}

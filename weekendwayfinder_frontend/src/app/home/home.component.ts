import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  // PUBLIC_INTERFACE
  goToPlanner(): void {
    // window.location.href = '/trip-planner'; // Normally use router
    // This will be properly replaced by routerLink in the button (Angular best practice)
  }
}

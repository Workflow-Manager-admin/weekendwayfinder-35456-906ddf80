import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-trip-planner',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './trip-planner.component.html',
  styleUrl: './trip-planner.component.css'
})
export class TripPlannerComponent {
  moods = ['Relaxing', 'Adventurous', 'Cultural'];
  submitted = false;
  planner = {
    distance: '',
    mood: '',
    budget: ''
  };
  errorMsg = '';

  constructor(router: Router) {
    this._router = router;
  }
  private _router: Router;

  // PUBLIC_INTERFACE
  submit() {
    this.submitted = true;
    this.errorMsg = '';
    if (!this.planner.distance || !this.planner.mood || !this.planner.budget) {
      this.errorMsg = 'Please fill out all preferences.';
      return;
    }
    this._router.navigate(['/ai-suggestions'], { state: { planner: this.planner } });
  }
}

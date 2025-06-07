import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';

interface TripSuggestion {
  title: string;
  description: string;
  mood: string;
  distance: number;
  price: number;
  image: string;
}

@Component({
  selector: 'app-ai-suggestions',
  standalone: true,
  imports: [CommonModule, NgClass],
  templateUrl: './ai-suggestions.component.html',
  styleUrl: './ai-suggestions.component.css'
})
export class AiSuggestionsComponent {
  suggestions: TripSuggestion[] = [];
  planner: { mood?: string; distance?: string; budget?: string } = {};

  constructor(router: Router) {
    // Use navigation state for context, fallback if not present
    const nav = router.getCurrentNavigation();
    this.planner = nav?.extras?.state?.['planner'] || {};
    this.generateSuggestions();
  }

  generateSuggestions() {
    // Sample/mock suggestion logic (would use AI/backend in a real app)
    this.suggestions = [
      {
        title: 'Nature Escape',
        description: 'Unwind at a peaceful lakeside and enjoy local trails.',
        mood: 'Relaxing',
        distance: 120,
        price: 180,
        image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80'
      },
      {
        title: 'Urban Adventure',
        description: 'Explore city hotspots, murals, and trendy cafes.',
        mood: 'Adventurous',
        distance: 80,
        price: 150,
        image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80'
      },
      {
        title: 'Cultural Gems',
        description: 'Visit museums and discover local heritage tours.',
        mood: 'Cultural',
        distance: 60,
        price: 110,
        image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80'
      }
    ].filter(s =>
      (!this.planner.mood || s.mood === this.planner.mood)
      && (!this.planner.distance || s.distance <= +this.planner.distance)
      && (!this.planner.budget || s.price <= +this.planner.budget)
    );
  }

  // PUBLIC_INTERFACE
  backToPlanner() {
    // called from the template: uses navigation
    if (this._router) {
      this._router.navigate(['/trip-planner']);
    }
  }
  private _router?: Router;
  constructor(router: Router) {
    this._router = router;
    // Use navigation state for context, fallback if not present
    const nav = router.getCurrentNavigation();
    this.planner = nav?.extras?.state?.['planner'] || {};
    this.generateSuggestions();
  }
}

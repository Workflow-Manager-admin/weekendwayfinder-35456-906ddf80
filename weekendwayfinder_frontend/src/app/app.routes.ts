import { Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';
import { TripPlannerComponent } from './trip-planner/trip-planner.component';
import { AiSuggestionsComponent } from './ai-suggestions/ai-suggestions.component';

export const routes: Routes = [
  { path: '', redirectTo: 'sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent },
  { path: 'home', component: HomeComponent },
  { path: 'trip-planner', component: TripPlannerComponent },
  { path: 'ai-suggestions', component: AiSuggestionsComponent },
  { path: '**', redirectTo: 'sign-in' }
];

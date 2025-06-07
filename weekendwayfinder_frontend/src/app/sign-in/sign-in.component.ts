import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
  signInForm: FormGroup;
  submitted = false;
  errorMsg: string = '';
  loading = false;

  constructor(fb: FormBuilder, router: Router) {
    this.signInForm = fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
    this._router = router;
  }
  private _router: Router;

  // PUBLIC_INTERFACE
  submit(): void {
    this.submitted = true;
    this.errorMsg = '';
    if (this.signInForm.invalid) {
      return;
    }
    const { email, password } = this.signInForm.value;
    this.loading = true;
    Promise.resolve().then(() => {
      this.loading = false;
      if (email === 'test@wayfinder.com' && password === 'weekend') {
        this._router.navigate(['/home']);
      } else {
        this.errorMsg = 'Invalid email or password. Hint: test@wayfinder.com / weekend';
      }
    });
  }
}

  // PUBLIC_INTERFACE
  submit(): void {
    this.submitted = true;
    this.errorMsg = '';
    if (this.signInForm.invalid) {
      return;
    }
    // Dummy authentication (client-only)
    const { email, password } = this.signInForm.value;
    this.loading = true;
    // Use Angular async approach for demo login
    Promise.resolve().then(() => {
      this.loading = false;
      if (email === 'test@wayfinder.com' && password === 'weekend') {
        this.router.navigate(['/home']);
      } else {
        this.errorMsg = 'Invalid email or password. Hint: test@wayfinder.com / weekend';
      }
    });
  }
}

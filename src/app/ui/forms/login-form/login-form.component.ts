import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ICredentials } from '../../../core/models/auth.model';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {
  private readonly _fb = inject(FormBuilder);
  private readonly _errors = {
    required: 'is required',
    email: 'has incorrect format',
    minlength: 'must be at least 8 characters long'
  }

  @Input() isLoading: boolean;
  @Input() error: string;
  @Output() formSended = new EventEmitter<ICredentials>();

  form = this._fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]]
  });

  get emailErrors(): string[] {
    return Object.keys(this.form.controls.email.errors ?? {}).map((error) => `Password ${this._errors[error]}`);
  }

  get passwordErrors(): string[] {
    return Object.keys(this.form.controls.password.errors ?? {}).map((error) => `Password ${this._errors[error]}`);
  }

  handleForm(): void {
    if (!this.form.valid) return;
    
    this.formSended.emit(this.form.getRawValue());
  }
}

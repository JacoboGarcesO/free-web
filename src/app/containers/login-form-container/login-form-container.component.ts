import { Component, OnInit, inject } from '@angular/core';
import { LoginFormComponent } from '../../ui/forms/login-form/login-form.component';
import { ICredentials } from '../../core/models/auth.model';
import { LoginFormContainerFacade } from './login-form-container.facade';
import { Observable } from 'rxjs';
import { IUser } from '../../core/models/user.model';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-login-form-container',
  standalone: true,
  imports: [LoginFormComponent, AsyncPipe],
  templateUrl: './login-form-container.component.html'
})
export class LoginFormContainerComponent implements OnInit {
  private readonly _facade = inject(LoginFormContainerFacade);

  currentUser$: Observable<IUser>;
  isLoading$: Observable<boolean>;
  loginError$: Observable<string>;

  ngOnInit(): void {
    this.initilizeSubsciptions();
  }

  handleLogin(credentials: ICredentials): void {
    this._facade.handleLogin(credentials);
  }

  private initilizeSubsciptions(): void {
    this.currentUser$ = this._facade.currentUser$();
    this.isLoading$ = this._facade.isLoading$();
    this.loginError$ = this._facade.loginError$();
  }
}

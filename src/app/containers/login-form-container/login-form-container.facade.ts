import { Injectable, inject } from "@angular/core";
import { ICredentials } from "../../core/models/auth.model";
import { AuthService } from "../../core/services/auth.service";
import { Observable, catchError, finalize, of, tap } from "rxjs";
import { AppState } from "../../core/state/app.state";
import { IUser } from "../../core/models/user.model";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class LoginFormContainerFacade {
  private readonly _service = inject(AuthService);
  private readonly _state = inject(AppState);
  private readonly _router = inject(Router);

  currentUser$(): Observable<IUser> {
    return this._state.user.currentUser.$();
  }

  isLoading$(): Observable<boolean> {
    return this._state.user.isLoading.$();
  }

  loginError$(): Observable<string> {
    return this._state.user.loginError.$();
  }

  handleLogin(credentials: ICredentials): void {
    this._state.user.isLoading.set(true);
    this._state.user.loginError.set(null);
    
    this._service.login(credentials).pipe(
      tap((user) => this._state.user.currentUser.set(user)),
      tap(() => this._router.navigateByUrl('/admin/doctors/holi')),
      catchError((error) => {
        this._state.user.loginError.set(error.error.message);
        return of();
      }),
      finalize(() => this._state.user.isLoading.set(false))
    ).subscribe();
  }
}
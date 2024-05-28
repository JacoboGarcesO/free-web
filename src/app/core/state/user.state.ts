import { Injectable, inject } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { IUser } from "../models/user.model";
import { StateFactory } from "./factory.state";

@Injectable({
  providedIn: 'root'
})
export class UserState {
  private readonly _factory = inject(StateFactory);
  private readonly currentUser$: BehaviorSubject<IUser> = new BehaviorSubject(null);
  private readonly loginError$: BehaviorSubject<string> = new BehaviorSubject(null);
  private readonly isLoading$: BehaviorSubject<boolean> = new BehaviorSubject(null);

  store() {
    return {
      currentUser: this._factory.state(this.currentUser$),
      loginError: this._factory.state(this.loginError$),
      isLoading: this._factory.state(this.isLoading$)
    }
  }
}
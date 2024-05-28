import { Injectable, inject } from "@angular/core";
import { UserState } from "./user.state";

@Injectable({
  providedIn: 'root'
})
export class AppState {
  private readonly _user = inject(UserState);

  get user () { return this._user.store(); }
}
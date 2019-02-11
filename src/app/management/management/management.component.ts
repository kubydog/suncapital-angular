import { Component, OnInit } from '@angular/core';
import {User} from '../../model/user';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {AppState, selectAuthState} from '../../store/app.states';
import {GetUserByToken} from '../../store/user/user.actions';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.css']
})
export class ManagementComponent implements OnInit {

  user: User;
  getState: Observable<any>;

  constructor(private store: Store<AppState>) {
    this.getState = this.store.select(selectAuthState);
  }

  ngOnInit() {
    this.store.dispatch(new GetUserByToken());
    this.getState.subscribe((state) => {
      this.user = state.user;
    });
  }

}

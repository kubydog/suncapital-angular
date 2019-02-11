import { Component, OnInit } from '@angular/core';
import {User} from '../../model/user';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {AppState, selectAuthState} from '../../store/app.states';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  user: User;
  getState: Observable<any>;

  constructor(
    private store: Store<AppState>
  ) {
    this.getState = this.store.select(selectAuthState);
  }

  ngOnInit() {
    this.getState.subscribe((state) => {
      this.user = state.user;
    });
  }

}

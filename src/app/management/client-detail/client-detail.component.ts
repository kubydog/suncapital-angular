import { Component, OnInit } from '@angular/core';
import {Client} from '../../model/client';
import {Store} from '@ngrx/store';
import {AppState, selectClientState} from '../../store/app.states';
import {Observable} from 'rxjs';
import {GetClientById} from '../../store/client/client.actions';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.css']
})
export class ClientDetailComponent implements OnInit {

  client: Client;
  getState: Observable<any>;
  errorMessage: string | null;

  constructor(private store: Store<AppState>,
              private route: ActivatedRoute) {
    this.getState = this.store.select(selectClientState);
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params.id;
      this.store.dispatch(new GetClientById(id));
    });
    this.getState.subscribe(state => {
      this.client = state.currentClient;
      this.errorMessage = state.errorMessage;
    });
  }

}

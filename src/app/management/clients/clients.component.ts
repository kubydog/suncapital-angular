import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Client} from '../../model/client';
import {Store} from '@ngrx/store';
import {AppState, selectClientState} from '../../store/app.states';
import {Delete, GetClients} from '../../store/client/client.actions';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  firstName = new FormControl('');
  lastName = new FormControl('');
  clients: Client[];
  getState: Observable<any>;
  errorMessage: string | null;

  constructor(private store: Store<AppState>,
              private router: Router) {
    this.getState = this.store.select(selectClientState);
  }

  ngOnInit() {
    this.getState.subscribe( state => {
      this.clients = state.clients;
      this.errorMessage = state.errorMessage;
    });
  }

  onSubmit() {
    const payload = {
      firstName: this.firstName.value,
      lastName: this.lastName.value
    };
    this.store.dispatch(new GetClients(payload));
  }

  onDelete(id) {
    const payload = {
      id: id
    };
    this.store.dispatch(new Delete(payload));
    location.reload();
  }

  onEdit(id) {
    this.router.navigateByUrl(`/app/client/edit/${id}`);
  }

  onDetail(id) {
    this.router.navigateByUrl(`/app/client/${id}`);
  }
}



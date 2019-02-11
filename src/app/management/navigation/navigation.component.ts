import {Component, Input, OnInit} from '@angular/core';
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

  @Input() user: User;

  constructor() {}

  ngOnInit() {}

}

import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Client} from '../../model/client';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  firstName = new FormControl('');
  lastName = new FormControl('');

  clients: Client[];

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {

  }
}

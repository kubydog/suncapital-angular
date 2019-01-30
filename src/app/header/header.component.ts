import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user: User;
  constructor() { }

  ngOnInit() {
  }

}

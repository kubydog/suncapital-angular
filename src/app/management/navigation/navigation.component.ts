import { Component, OnInit } from '@angular/core';
import {User} from '../../model/user';
import {UserService} from '../../service/user.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  user: User;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.user = this.userService.getById('1');
  }

}

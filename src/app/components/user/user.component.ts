import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: User[];
  constructor() { }

  ngOnInit() {
    console.log('init...');
    this.users = [
      {
        firstName: 'Anielica',
        lastName: 'Moi',
        age: 33,
        address: {
          street: 'Chrzanowskiego str 19',
          city: 'Warsaw',
          state: 'Mazovian'
        }
      },
      {
        firstName: 'Kevin',
        lastName: 'Lucky',
        age: 44,
        address: {
          street: 'School str 19',
          city: 'Berlin',
          state: 'Centralen'
        }
      },
      {
        firstName: 'Sony',
        lastName: 'Sunshine',
        age: 99,
        address: {
          street: 'Port str 29',
          city: 'Los Angeles',
          state: 'California'
        }
      }
    ];
  }

}

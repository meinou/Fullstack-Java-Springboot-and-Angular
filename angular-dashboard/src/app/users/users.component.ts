import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

users: User[];
user1: User;
name: string;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers(): void {
     this.userService.getAllUsers()
     .subscribe(users => {
       this.users = users;
       console.log(this.users);
     });
  }

  getUserByName(name): void {
   // this.userService.getAllUsers()
   // .subscribe(users => this.user1 = users.filter(user => user.userName == name)[0]);
    this.userService.getUserByUserName(name) 
    .subscribe(user => {
      this.user1 = user;
      console.log(user);
    })
  }
}

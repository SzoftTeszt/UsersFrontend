import { Component } from '@angular/core';
import { BaseService } from '../base.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  users:any
  newUser:any={}
  
  constructor(private base:BaseService){
    base.getUsers().subscribe(
      (a)=>this.users=a
    )
  }

  addUser(){
    this.base.addUser(this.newUser)
    this.newUser={}
  }

  deleteUser(user:any){
    this.base.deleteUser(user)
  }

  updateUser(user:any){
    this.base.updateUser(user)
  }
}

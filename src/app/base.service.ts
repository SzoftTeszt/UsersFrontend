import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  users= new BehaviorSubject(null)
  url="http://172.16.16.148:7000/api/Users/"

  constructor(private http:HttpClient) {
    this.loadUsers()
   }

  private loadUsers(){
    this.http.get(this.url).subscribe(
      (adatok:any)=>this.users.next(adatok)
    )
  }

  getUsers(){
    return this.users
  }

  addUser(user:any){
    this.http.post(this.url,user).forEach(
      ()=>this.loadUsers()
    )
  }

  updateUser(user:any){
    this.http.put(this.url+user.id,user).forEach(
      ()=>this.loadUsers()
    )
  }

  deleteUser(user:any){
    this.http.delete(this.url+user.id).forEach(
      ()=>this.loadUsers()
    )
  }

}

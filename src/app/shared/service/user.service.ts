import { Injectable } from '@angular/core';
import { Iuser } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
userArr:Array<Iuser>=[]
  constructor() { }

  fetchalluser(){
    return this.userArr
  }

  add(userObj:Iuser){
    this.userArr.push(userObj)
  }

  
}

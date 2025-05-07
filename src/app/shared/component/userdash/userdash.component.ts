import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { Iuser } from '../../model/user';

@Component({
  selector: 'app-userdash',
  templateUrl: './userdash.component.html',
  styleUrls: ['./userdash.component.scss']
})
export class UserdashComponent implements OnInit {
  userData:Iuser[]=[]
  constructor(private _userService:UserService) { }

  ngOnInit(): void {
    this.userData=this._userService.fetchalluser()
  }

 

}

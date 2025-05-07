import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UuidService } from './shared/service/uuid.service';
import { Iuser } from './shared/model/user';
import { UserService } from './shared/service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private _uuidService:UuidService,
    private _userService:UserService
  ){}
  title = 'MT_TDF';
@ViewChild('userForm') userForm !:NgForm
   radioArr=[
    {contactMode:'Email',id:1},
    {contactMode:'Phone',id:2}
  ]

  onSubmit(){
    if(this.userForm.valid){
      let newObj:Iuser={
        ...this.userForm.value,
        id:this._uuidService.generateUuid()
      }
      this.userForm.resetForm()
      this._userService.add(newObj)
    }
  }
}

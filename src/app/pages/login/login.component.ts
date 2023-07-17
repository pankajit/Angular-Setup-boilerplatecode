import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpServiceService } from 'src/app/common/http-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  LoginForm!:FormGroup

  constructor(
    private _http: HttpServiceService,
    private builder_from:FormBuilder
  ) {}

  ngOnInit(): void {
   this.LoginForm = this.builder_from.group({
      email:[""],
      password:[""]
   })

  }


  dologin(){
    console.log(this.LoginForm.value)
    console.log(this.LoginForm.controls["email"].value)
    console.log(this.LoginForm.controls["password"].value)
  }

  getuserDetails(){
    this._http.getUser().subscribe((response:any) => {
      console.log('user_response',response)
    })
  }


}

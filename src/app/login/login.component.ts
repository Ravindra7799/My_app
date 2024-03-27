import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private _loginService: LoginService, private router: Router){}

  public loginForm:FormGroup=new FormGroup(
    {
      email: new FormControl(),
      password: new FormControl(),
      
    }
  )

  login(){
    console.log(this.loginForm.value);
    this._loginService.login(this.loginForm.value).subscribe(
      (data:any)=>{
        // token storage
        localStorage.setItem("my-app-token",data.token)
        alert("Loggedin Successfully");
        this.loginForm.reset();
        this.router.navigate(['/dashboard']);
      },
      (err:any)=>{
        alert("Login failed");
      }
    )
  }

  

}

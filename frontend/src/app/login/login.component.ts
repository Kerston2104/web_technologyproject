import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  author={
    email:'',
    password:''
  }

  constructor(private _auth:AuthService,private router: Router) { }

  ngOnInit(): void {
  }

  token:any;

  login(){
    this._auth.login(this.author)
      .subscribe(
        res=>{
          this.token = res;
          localStorage.setItem('token', this.token.mytoken);
          this.router.navigate(['/home']);
        },
        err=>{
          console.log(err);
        }

      )
  }
}

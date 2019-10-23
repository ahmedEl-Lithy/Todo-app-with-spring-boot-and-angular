import { BasicAuthService } from '../service/basic-auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'ahmed';
  password = '';
  // errorMessage = 'Invalid Credentials'
  invalidLogin = false;

  constructor(private router: Router,
              private basicAuthService: BasicAuthService) { }

  ngOnInit() { }

  handleBasicAuthLogin() {
    this.basicAuthService.executeAuthService(this.username, this.password)
        .subscribe(
          data => {
            this.router.navigate(['welcome', this.username]);
            this.invalidLogin = false;
          },
          error => {
            console.log(error);
            this.invalidLogin = true;
          }
        );
  }

}

import { BasicAuthService } from './../service/basic-auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private basicAuthService: BasicAuthService) { }

  ngOnInit() {
    this.basicAuthService.logout();
  }

}

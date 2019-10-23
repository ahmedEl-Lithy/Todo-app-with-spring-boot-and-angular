import { BasicAuthService } from './../service/basic-auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  // the service is called from the html file
  constructor(private basicAuthService: BasicAuthService) { }

  ngOnInit() { }

}

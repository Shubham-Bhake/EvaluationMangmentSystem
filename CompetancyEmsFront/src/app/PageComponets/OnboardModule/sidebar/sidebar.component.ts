import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/login-service.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  userRole: any;
mode: any;

  constructor(public login: LoginService, private router: Router) {}

  ngOnInit(): void {
    this.userRole = this.login.getUserRole();
    console.log("user role for onboard login "+this.userRole)
  }


}

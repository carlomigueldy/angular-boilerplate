import { DrawerService } from './../../services/app/drawer.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(public drawerService: DrawerService, public router: Router) {}

  ngOnInit(): void {}
}

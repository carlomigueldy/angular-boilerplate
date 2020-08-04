import { DrawerService } from './../../../services/app/drawer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(public drawerService: DrawerService) { }

  ngOnInit(): void {
  }

}

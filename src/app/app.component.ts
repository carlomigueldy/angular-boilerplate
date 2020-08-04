import { Component } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { fromLeftEasing } from 'ngx-router-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('fromLeftEasing', [
      transition('auth => app', useAnimation(fromLeftEasing)),
    ]),
  ],
})
export class AppComponent {
  getState(outlet) {
    return outlet.activatedRouteData.state;
  }
}

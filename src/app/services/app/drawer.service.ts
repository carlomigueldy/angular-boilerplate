import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DrawerService {
  public show: boolean = true;

  constructor() {}

  toggle(): void {
    this.show = !this.show;
  }
}

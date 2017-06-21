import { Component } from '@angular/core';
import { HorizonService } from './horizon.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  table = this.horizon.table('menu');
  menus: Array<any> = [];

  constructor(private horizon: HorizonService) {
    this.table
      .order("order")
      .watch()
      .subscribe(data => {
        this.menus = data;
      });
  }
}

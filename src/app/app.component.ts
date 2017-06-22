import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HorizonService } from './horizon.service';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('sidenav') input: ElementRef;
  title = 'app';
  table = this.horizon.table('menu');
  menus: Array<any> = [];

  constructor(private horizon: HorizonService, public auth: AuthService) {
    // Comment out this method call if using
    // hash-based routing
    auth.handleAuthentication();

    // Uncomment this method call if using
    // hash-based routing
    // auth.handleAuthenticationWithHash();
  }

  ngOnInit() {
    this.table
      .order("order")
      .watch()
      .subscribe(data => {
        this.menus = data;
      });
  }
}

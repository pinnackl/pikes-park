import { Component, OnInit } from '@angular/core';
import * as permission from 'permissions.request';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  handlePermission(e) {
    if (e.checked) {
      permission.request({name:'geolocation'}).then(function(result) {
        if (result.state == 'granted') {

        } else if (result.state == 'prompt') {
          navigator.geolocation.getCurrentPosition(e => {});
        } else if (result.state == 'denied') {
          // report(result.state);
          // geoBtn.style.display = 'inline';
        }
        result.onchange = function() {
          // report(result.state);
        }
      });
    } else {
      // permission.revoke({name:'geolocation'}).then(function(result) {
      // });
    }
  }

}

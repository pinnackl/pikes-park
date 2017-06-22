import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pikes-user',
  templateUrl: './pikes-user.component.html',
  styleUrls: ['./pikes-user.component.css']
})
export class PikesUserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("pikes user");
  }

}

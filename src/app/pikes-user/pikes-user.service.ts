import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HorizonService } from '../horizon.service';

@Injectable()
export class PikesUserService {

  table = this.horizon.table('user');

  constructor(private horizon: HorizonService) { }

  getUser(key: string, value: string): any {
    let query = {};
    query[key] = value;
    return new Promise((resolve, reject) => {
      this.table
        .find(query)
        .watch()
        .subscribe(data => {
          resolve(data);
        });
    });
  }

  setUser(info: any): Object {
    return new Promise((resolve, reject) => {
      this.table
        .upsert({
          id: info.nickname,
          username: info.name,
          avatar: info.picture
        })
        .subscribe(
        data => {
          resolve(data)
        },
        err => {
          reject(err);
        });
    });
  }

  addPoint() {
    let nickname = localStorage.getItem('nickname');
    this.getUser('id', nickname).then(data => {
      let points = data.points != "null" && typeof data.points != "undefined" ? data.points + 1 : 0;
      this.table.update({ id: nickname, points: points });
    });
  }

}

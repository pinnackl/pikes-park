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

}

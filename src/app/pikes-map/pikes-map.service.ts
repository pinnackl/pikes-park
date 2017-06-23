import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { HorizonService } from '../horizon.service';

@Injectable()
export class PikesMapService {

  table = this.horizon.table('parkLocations');
  private _navItemSource = new BehaviorSubject<any>(0);
  navItem$ = this._navItemSource.asObservable();

  constructor(private http: Http, private horizon: HorizonService) { }

  getParkLocation(userPosition): Observable<any> {
    // TO FIX : NO RESULT WITH THIS REQUEST CURRENT STATE
    return this.http.get("https://opendata.paris.fr/api/records/1.0/search/?dataset=stationnement-sur-voie-publique-emprises&rows=1000&facet=zonres&facet=regpri&facet=regpar&facet=typsta&facet=typ" + userPosition)
      .map(this.handleData.bind(this))
      .catch(this.handleError);
  }

  changeNav(number) {
    this._navItemSource.next(number);
  }

  changeState(marker: any) {
    this.table.store(marker);
  }

  private handleData(res: Response) {
    let body = res.json();
    let arrayLocations = [];
    let arrayPromises = [];

    body.records.forEach(element => {
      let lat = element.geometry.coordinates[1];
      let long = element.geometry.coordinates[0];
      let state = "free";
      let iconUrl = "../../../assets/icones/marker-free.svg";
      arrayPromises.push(new Promise((resolve, reject) => {
        this.table
          .find({ id: lat + long })
          .watch()
          .subscribe(data => {
            state = data === null ? state : data.state;
            iconUrl = state === "free" ? "../../../assets/icones/marker-free.svg" : "../../../assets/icones/marker-busy.svg";
            arrayLocations.push({
              id: lat + long,
              lat: lat,
              long: long,
              state: state,
              iconUrl: iconUrl
            })
            resolve(true);
          });
      }));
    });

    Promise.all(arrayPromises).then(values => {
      this.table.store(arrayLocations);
      this.changeNav(arrayLocations);
    })
  }

  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }

    return Observable.throw(errMsg);
  }

}

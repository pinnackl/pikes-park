import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class PikesMapService {

  constructor(private http: Http) { }

  getParkLocation(): Observable<any> {
    return this.http.get("https://opendata.paris.fr/api/records/1.0/search/?dataset=parcs-de-stationnement-concedes-de-la-ville-de-paris&facet=arrdt&facet=type_parc&facet=horaire_na&facet=autopart&facet=tarif_pr&facet=tarif_res")
      .map(this.handleData)
      .catch(this.handleError);
  }

  private handleData(res: Response) {
  	let body = res.json();

    return body;
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

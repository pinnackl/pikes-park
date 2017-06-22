import { Injectable } from '@angular/core';

import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PikesMapService {

  constructor(private http: Http) { }

  getParkLocation(): Object {
    return new Promise((resolve, reject) => {
      this.http.get("https://opendata.paris.fr/api/records/1.0/search/?dataset=parcs-de-stationnement-concedes-de-la-ville-de-paris&facet=arrdt&facet=type_parc&facet=horaire_na&facet=autopart&facet=tarif_pr&facet=tarif_res")
      .map(data => {
      	console.log(data);
      }).catch((error: any) => {
      		console.log(error);
      		 return Observable.throw(error.statusText);
      });
    });
  }

}

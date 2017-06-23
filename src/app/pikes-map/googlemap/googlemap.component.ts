import { Component, OnInit } from '@angular/core';

import { PikesMapService } from "../pikes-map.service";
import { PikesUserService } from "../../pikes-user/pikes-user.service";

import { Subscription } from 'rxjs/Subscription';

import { AuthService } from '../../auth/auth.service';

@Component({
	selector: 'app-googlemap',
	templateUrl: './googlemap.component.html',
	styleUrls: ['./googlemap.component.css'],
	providers: [PikesMapService, PikesUserService]
})

export class GooglemapComponent implements OnInit {

	title: string = 'MAP';
	lat: number = 48.866667;
	lng: number = 2.333333;
	zoom: number = 11;
	markers: Array<any> = [];
	subscription: Subscription;
	userPosition: string = "";

	constructor(private pikeMapService: PikesMapService, private pikeUserService: PikesUserService, public auth: AuthService) { }

	location = {};

	search(nameKey, myArray){
	    for (var i=0; i < myArray.length; i++) {
	        if (myArray[i].id === nameKey) {
	            return myArray[i];
	        }
	    }
	}

	setPosition(position) {
		this.location = position.coords;

		var resultObject = this.search("user", this.markers);

		if (resultObject) {
			resultObject.lat =  position.coords.latitude;
			resultObject.long =  position.coords.longitude;
		} else {
			this.markers.push({
						id: "user",
						lat: position.coords.latitude,
						long: position.coords.longitude,
						state: "",
						iconUrl: "../../../assets/icones/marker-user.svg"
					});
		}

		this.zoom = 18;
		this.lat = position.coords.latitude;
		this.lng = position.coords.longitude;
		this.userPosition = "&geofilter.distance=" + position.coords.latitude + "%2C" + position.coords.longitude + "%2C" + "200"
		//this.userPosition = "";
		this.pikeMapService
			.getParkLocation(this.userPosition)
			.subscribe();
	}

	ngOnInit() {
		this.subscription = this.pikeMapService.navItem$
			.subscribe(data => {
				if (data != 0) {
					data.forEach(element => {
						this.markers.push(element);
					});
				}
			});
		this.makeRequest();
		this.loopRequest();
	}

	makeRequest() {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(this.setPosition.bind(this));
		};
	}

	loopRequest() {
		let tmpthis = this;
		setTimeout(function () {
			tmpthis.makeRequest();
			tmpthis.loopRequest();
		}, 50000);
	}

	clickFree(marker) {
		marker.state = "free";
		marker.iconUrl = "../../../assets/icones/marker-free.svg";
		this.pikeMapService.changeState(marker);
		this.pikeUserService.addPoint();
	}

	clickBusy(marker) {
		marker.state = "busy";
		marker.iconUrl = "../../../assets/icones/marker-busy.svg";
		this.pikeMapService.changeState(marker);
		this.pikeUserService.addPoint();
	}

	clickCenter() {
		this.makeRequest();
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}
}


import { Component, OnInit } from '@angular/core';

import { PikesMapService } from "../pikes-map.service";
import { PikesUserService } from "../../pikes-user/pikes-user.service";

import { Subscription } from 'rxjs/Subscription';

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

	constructor(private pikeMapService: PikesMapService, private pikeUserService: PikesUserService) { }

	location = {};

	setPosition(position) {
		this.location = position.coords;
		this.markers.push({
			 id: position.coords.latitude + position.coords.longitude,
             lat: position.coords.latitude,
             long: position.coords.longitude,
             state: "",
             iconUrl: "../../../assets/icones/marker-user.svg"
		});
		//this.userPosition = "&geofilter.distance=" + position.coords.latitude + "%2C" + position.coords.longitude + "%2C" + "1000"
		this.userPosition = "";
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

	clickCenter(e) {
		// this.lat = 
		// this.lng = 
		// this.zoom = 
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}
}


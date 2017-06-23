import { Component, OnInit } from '@angular/core';

import { PikesMapService } from "../pikes-map.service"

import { Subscription } from 'rxjs/Subscription';

@Component({
	selector: 'app-googlemap',
	templateUrl: './googlemap.component.html',
	styleUrls: ['./googlemap.component.css'],
	providers: [PikesMapService]
})

export class GooglemapComponent implements OnInit {

	title: string = 'MAP';
	lat: number = 48.866667;
	lng: number = 2.333333;
	zoom: number = 11;
	markers: Array<any> = [];
	subscription: Subscription;
	userPosition: string = "";

	constructor(private pikeMapService: PikesMapService) { }

	location = {};

	setPosition(position) {
		this.location = position.coords;
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
		this.getGeoloc();
	}

	getGeoloc() {
		let tmpthis = this;
		setTimeout(function () {
			if (navigator.geolocation) {
				navigator.geolocation.getCurrentPosition(tmpthis.setPosition.bind(tmpthis));
			};
		}, 5000);
	}

	clickFree(marker) {
		marker.state = "free"
		this.pikeMapService.changeState(marker);
	}

	clickBusy(marker) {
		marker.state = "busy"
		this.pikeMapService.changeState(marker);
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}
}


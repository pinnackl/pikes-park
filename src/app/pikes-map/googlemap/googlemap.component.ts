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


	constructor(private pikeMapService: PikesMapService) { }

	ngOnInit() {
		this.subscription = this.pikeMapService.navItem$
			.subscribe(data => {
				if (data != 0) {
					data.forEach(element => {
						this.markers.push(element);
					});
				}
			});

		this.pikeMapService
			.getParkLocation()
			.subscribe();
	}

	mapClicked($event: MouseEvent) {

	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}
}


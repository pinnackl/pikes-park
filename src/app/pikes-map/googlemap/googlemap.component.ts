import { Component, OnInit } from '@angular/core';

import { PikesMapService } from "../pikes-map.service"

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

	constructor(private pikeMapService: PikesMapService) { }

	ngOnInit() {
		this.pikeMapService
			.getParkLocation()
			.subscribe(data => {
				this.markers = data;
			});
	}

	mapClicked($event: MouseEvent) {

	}



}


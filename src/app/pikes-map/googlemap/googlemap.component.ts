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

	constructor(private pikeMapService: PikesMapService) { }

	ngOnInit() {
		this.pikeMapService
			.getParkLocation()
			.subscribe(data => {
				console.log(data);
			});
	}

	mapClicked($event: MouseEvent) {
		this.markers.push({
			lat: 9.9,
			lng: 2.5,
			state: "free"
		});
	}

	markers: marker[] = [
		{
			lat: 48.866667,
			lng: 2.333333,
			state: "free",
			//label: 'A',
			//draggable: true
		},
		{
			lat: 49.373858,
			lng: 7.215982,
			state: "busy"
			//label: 'B',
			//draggable: false
		},
		{
			lat: 49.723858,
			lng: 7.895982,
			state: "free"
			//label: 'C',
			//draggable: true
		}
	]


}


// just an interface for type safety.
interface marker {
	lat: number;
	lng: number;
	state: string;
	//label?: string;
	//draggable: boolean;
}
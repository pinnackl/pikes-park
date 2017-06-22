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
	userPosition: string = "";

	constructor(private pikeMapService: PikesMapService) { }

	location = {};

   	setPosition(position){
	  this.location = position.coords;
	  console.log(position.coords);
	  this.userPosition = "&geofilter.distance="+position.coords.latitude+"%2C"+position.coords.longitude+"%2C"+"500"
	  console.log(this.userPosition)

	  this.pikeMapService
			.getParkLocation(this.userPosition)
			.subscribe(data => {

				for (var i = 0; i < data.records.length; i++) {
			  		var resBis = data.records[i]
			  		var lng = data.records[i].geometry.coordinates[0]
			  		var lat = data.records[i].geometry.coordinates[1]
			  		
			  		this.markers.push({
						lat: lat,
						lng: lng,
						state: "free"
					});
			  	}
			
			});

	}

	ngOnInit() {
		if(navigator.geolocation){
      		navigator.geolocation.getCurrentPosition(this.setPosition.bind(this));
      	};
		this.pikeMapService
			.getParkLocation(this.userPosition)
			.subscribe(data => {

				for (var i = 0; i < data.records.length; i++) {
			  		var resBis = data.records[i]
			  		var lng = data.records[i].geometry.coordinates[0]
			  		var lat = data.records[i].geometry.coordinates[1]
			  		
			  		this.markers.push({
						lat: lat,
						lng: lng,
						state: "free"
					});
			  	}
			

				this.markers = data;
			});
	}

	clickFree(marker) {
	    marker.state = "free"
	}

	clickBusy(marker) {
	 	marker.state = "busy"
	}


<<<<<<< HEAD
	
=======
>>>>>>> c0b9de66d6f803bf55a0c0c0a86172800eb1f848

}


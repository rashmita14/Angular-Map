import { Component, OnInit } from '@angular/core';
import { MapService } from './map-service';
import { Map } from './model/map'
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  providers: [MapService]
})
export class MapComponent implements OnInit {
  title = 'angular-7-listing-example';
  maps: Map[];
  latitude = -28.68352;
  longitude = -147.20785;
  mapType = 'satellite';
  zoom = 1;
  searchValue: string = '';

  constructor(public http: HttpClient, private mapService: MapService) {
  }

  ngOnInit(): void {
    this.getMapData();
  }
  getMapData() {
    this.mapService
      .getMapData()
      .subscribe((data: Map[]) => {
        this.maps = data;
      });
  }

  search() {
    if (this.searchValue) {
      this.maps = this.maps.filter(item => item.postal_code == this.searchValue);
    }
  }

  rowClick(mapId) {
    let getLatLogValue = this.maps.find(row => row.id == mapId)
    this.latitude = Number(getLatLogValue.latitude);
    this.longitude = Number(getLatLogValue.logitude);
  }


}

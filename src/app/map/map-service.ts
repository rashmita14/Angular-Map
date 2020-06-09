
//helper.service.ts
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class MapService {

  url = "http://localhost:4000/api/v1";
 
  constructor(private http: HttpClient) {
    
  }
  getMapData() {
    return this.http.get(this.url+'/mapdata')
  }
}

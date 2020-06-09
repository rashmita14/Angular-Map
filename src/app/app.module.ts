import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AgmCoreModule} from '@agm/core';
import { MapComponent } from './map/map.component'

import { MapService } from './map/map-service';
import {HttpClientModule} from '@angular/common/http';

import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: ''
    })

  ],
  providers: [MapService],
  bootstrap: [AppComponent]
})
export class AppModule { }

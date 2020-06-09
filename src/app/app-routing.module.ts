import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapComponent } from "./map/map.component";

const routes: Routes = [
  {
    path: "maplist",
    component: MapComponent
  },
  {
    path: "",
    redirectTo:"maplist",
    pathMatch : 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { WorldmapComponent } from "./worldmap/worldmap.component";

import { AppComponent } from "./app.component";
import { Grid } from "ag-grid-community";
import { CountriesGridComponent } from "./countries-grid/countries-grid.component";

const routes: Routes = [
  { path: "", component: CountriesGridComponent },
  { path: "worldmap", component: WorldmapComponent },
  { path: "allcountries", component: CountriesGridComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

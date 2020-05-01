import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { WorldmapComponent } from "./worldmap/worldmap.component";
import { CountryDetailsComponent } from "./country-details/country-details.component";

import { AppComponent } from "./app.component";
import { Grid } from "ag-grid-community";
import { CountriesGridComponent } from "./countries-grid/countries-grid.component";
import { ContactComponent } from "./contact/contact.component";

const routes: Routes = [
  { path: "", component: CountriesGridComponent },
  { path: "worldmap", component: WorldmapComponent },
  { path: "allcountries", component: CountriesGridComponent },
  { path: "worldmap", component: WorldmapComponent },
  { path: "contact", component: ContactComponent },
  { path: "countryDetails/:country", component: CountryDetailsComponent },
  { path: "**", component: CountriesGridComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

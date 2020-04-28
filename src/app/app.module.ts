import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AgGridModule } from "ag-grid-angular";
import { HttpClientModule } from "@angular/common/http";
import { ChartsModule } from "ng2-charts";
import { Ng2GoogleChartsModule } from "ng2-google-charts";
import { WorldmapComponent } from "./worldmap/worldmap.component";
import { CountryDetailsComponent } from "./country-details/country-details.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { CountriesGridComponent } from "./countries-grid/countries-grid.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatSliderModule } from "@angular/material/slider";
import { MatTabsModule } from "@angular/material/tabs";

@NgModule({
  declarations: [
    AppComponent,
    WorldmapComponent,
    CountryDetailsComponent,
    CountriesGridComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AgGridModule.withComponents([]),
    ChartsModule,
    Ng2GoogleChartsModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatTabsModule,
  ],
  providers: [
    {
      provide: "mapsApiKey",
      useValue: "AIzaSyB34dO_PfMWd8icul9F6TFEuahAADKkYFQ",
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

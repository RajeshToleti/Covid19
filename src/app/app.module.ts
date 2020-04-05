import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AgGridModule } from "ag-grid-angular";
import { HttpClientModule } from "@angular/common/http";
import { ChartsModule } from "ng2-charts";
import { Ng2GoogleChartsModule } from "ng2-google-charts";
import { WorldmapComponent } from "./worldmap/worldmap.component";
import { CountryDetailsComponent } from './country-details/country-details.component';

@NgModule({
  declarations: [AppComponent, WorldmapComponent, CountryDetailsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AgGridModule.withComponents([]),
    ChartsModule,
    Ng2GoogleChartsModule
  ],
  providers: [
    {
      provide: "mapsApiKey",
      useValue: "AIzaSyB34dO_PfMWd8icul9F6TFEuahAADKkYFQ"
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

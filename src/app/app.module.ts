import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AgGridModule } from "ag-grid-angular";
import { HttpClientModule } from "@angular/common/http";
import { ChartsModule } from "ng2-charts";
import { Ng2GoogleChartsModule } from "ng2-google-charts";
import { WorldmapComponent } from "./worldmap/worldmap.component";

@NgModule({
  declarations: [AppComponent, WorldmapComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AgGridModule.withComponents([]),
    ChartsModule,
    Ng2GoogleChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

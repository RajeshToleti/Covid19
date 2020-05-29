import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
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
import { ContactComponent } from "./contact/contact.component";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatCardModule } from "@angular/material/";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatSnackBar, MatSnackBarModule } from "@angular/material";
@NgModule({
  declarations: [
    AppComponent,
    WorldmapComponent,
    CountryDetailsComponent,
    CountriesGridComponent,
    ContactComponent,
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
    MatCheckboxModule,
    FormsModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSnackBarModule,
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

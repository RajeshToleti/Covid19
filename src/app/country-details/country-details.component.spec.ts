import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { AppRoutingModule } from "../app-routing.module";
//import { Routes, RouterModule } from "@angular/router";
import { CountryDetailsComponent } from "./country-details.component";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "../app.component";
import { WorldmapComponent } from "../worldmap/worldmap.component";
import { CountriesGridComponent } from "../countries-grid/countries-grid.component";
import { ContactComponent } from "../contact/contact.component";

describe("CountryDetailsComponent", () => {
  let component: CountryDetailsComponent;
  let fixture: ComponentFixture<CountryDetailsComponent>;
  //const routes: Routes = [
  // { path: "countryDetails/:country", component: CountryDetailsComponent },
  //];
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [
        CountryDetailsComponent,
        AppComponent,
        WorldmapComponent,

        CountriesGridComponent,
        ContactComponent,
      ],
      imports: [
        HttpClientModule,
        AppRoutingModule,
        //RouterModule.forRoot(routes),
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

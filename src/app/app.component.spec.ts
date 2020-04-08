import { TestBed, async } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { AppComponent } from "./app.component";
import { AgGridModule } from "ag-grid-angular";
import { WorldmapComponent } from "./worldmap/worldmap.component";
import { HttpClientModule } from "@angular/common/http";
import { ChartsModule } from "ng2-charts";
import { Ng2GoogleChartsModule } from "ng2-google-charts";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { CountryDetailsComponent } from "./country-details/country-details.component";
import { CountriesGridComponent } from "./countries-grid/countries-grid.component";

describe("AppComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule,
        AgGridModule.withComponents([]),
        ChartsModule,
        Ng2GoogleChartsModule,
        FontAwesomeModule,
      ],
      declarations: [
        AppComponent,
        WorldmapComponent,
        CountryDetailsComponent,
        CountriesGridComponent,
      ],
    }).compileComponents();
  }));

  it("should create the app", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Covid19'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual("Covid19");
  });
});

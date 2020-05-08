import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { AgGridModule } from "ag-grid-angular";
import { CountriesGridComponent } from "./countries-grid.component";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

describe("CountriesGridComponent", () => {
  let component: CountriesGridComponent;
  let fixture: ComponentFixture<CountriesGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [CountriesGridComponent],
      imports: [AgGridModule.withComponents([]), HttpClientModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountriesGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

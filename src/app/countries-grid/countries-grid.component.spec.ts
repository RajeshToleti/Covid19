import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { AgGridModule } from "ag-grid-angular";
import { CountriesGridComponent } from "./countries-grid.component";
import { NO_ERRORS_SCHEMA, DebugElement } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { By } from "@angular/platform-browser";

describe("CountriesGridComponent", () => {
  let component: CountriesGridComponent;
  let fixture: ComponentFixture<CountriesGridComponent>;
  let el: DebugElement;

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
    el = fixture.debugElement;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  // it("check Countries in Grid", () => {
  //   const appElement = fixture.nativeElement;

  //   const cellElements = appElement.querySelectorAll(".ag-cell-value");
  //   expect(cellElements.length).toEqual(200);
  // });
});

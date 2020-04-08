import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { WorldmapComponent } from "./worldmap.component";
import { Ng2GoogleChartsModule } from "ng2-google-charts";
import { HttpClientModule } from "@angular/common/http";

describe("WorldmapComponent", () => {
  let component: WorldmapComponent;
  let fixture: ComponentFixture<WorldmapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [Ng2GoogleChartsModule, HttpClientModule],
      declarations: [WorldmapComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorldmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

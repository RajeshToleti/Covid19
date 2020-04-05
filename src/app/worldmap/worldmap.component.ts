import { Component, OnInit } from "@angular/core";
import { GoogleChartInterface } from "ng2-google-charts/google-charts-interfaces";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";

@Component({
  selector: "app-worldmap",
  templateUrl: "./worldmap.component.html",
  styleUrls: ["./worldmap.component.scss"],
})
export class WorldmapComponent implements OnInit {
  mapData: any;

  public geoChart: GoogleChartInterface = {
    // use :any or :GoogleChartInterface

    chartType: "GeoChart",
    dataTable: [
      ["Country", "Population (2019)"],
      ["Austria", 8858775],
      ["Belgium", 11467923],
      ["Bulgaria", 7000039],
      ["Croatia", 4076246],
      ["India", 875898],
    ],
    options: {
      //region: "150", // Europe
      colorAxis: { colors: ["#ffc107", "#fd7e14", "#dc3545"] },
      backgroundColor: "#9cf",
      datalessRegionColor: "#f8f9fa",
      defaultColor: "#6c757d",
    },
  };

  myfunction() {
    let ccComponent = this.geoChart.component;
    let ccWrapper = ccComponent.wrapper;

    //force a redraw
    ccComponent.draw();
  }

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get("https://api.covid19api.com/summary").subscribe(
      (data) => {
        delete data["Countries"][0];

        let rawdata = data["Countries"]
          .sort((a, b) => b.TotalDeaths - a.TotalDeaths)
          .slice(0, 25);
        //console.log(rawdata);
        this.mapData = [[]];

        for (let i = 0; i < 25; i++) {
          this.mapData[i] = [rawdata[i]["Country"], rawdata[i]["TotalDeaths"]]; //this.rowData[i]["Country"];
        }

        this.mapData.filter((item) => {
          if (item[0] == "United States of America") {
            item[0] = "United States";
          } else if (item[0] == "Iran, Islamic Republic of") {
            item[0] = "Iran";
          }

          return item;
        });
        //console.log(filteredDataSource);
        this.mapData.unshift(["Country", "Total deaths"]);

        this.geoChart.dataTable = this.mapData;
      },
      (err: HttpErrorResponse) => {
        console.log(err.message);
      }
    );
  }
}

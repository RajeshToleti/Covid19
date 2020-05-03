import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { ChartOptions, ChartType, ChartDataSets } from "chart.js";
import { Label, Color } from "ng2-charts";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-country-details",
  templateUrl: "./country-details.component.html",
  styleUrls: ["./country-details.component.scss"],
})
export class CountryDetailsComponent implements OnInit {
  title = "Covid19";
  reportDate = new Date();

  rowData: any;
  chartdata: any;
  country: string;
  temp = 1;
  Deaths = true;
  Recovered = false;
  ChartOptions: ChartOptions = {
    responsive: true,
  };

  chartOptions = {
    responsive: true,
  };

  chartData = [{ data: [], label: "" }];

  chartLabels = [];
  //chartColors: Color[] = [{ backgroundColor: "blue" }];
  chartColors: Color[] = [
    {
      backgroundColor: "rgba(103, 58, 183, .1)",
      borderColor: "red",
      pointBackgroundColor: "rgb(103, 58, 183)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(103, 58, 183, .8)",
    },
  ];

  deathsData: Array<number> = [];
  recoveredData: Array<number> = [];
  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit() {
    //this.rowData = this.http.get("https://api.covid19api.com/countries");
    //https://api.covid19api.com/dayone/country/IN/status/deaths/live
    this.generateCharts();
  }

  isRecovered(event): void {
    if (event.checked == true) {
      this.Recovered = true;
    } else {
      this.Recovered = false;
    }
    this.generateCharts();
  }
  isDead(event): void {
    if (event.checked == true) {
      this.Deaths = true;
    } else {
      this.Deaths = false;
    }
    this.generateCharts();
  }
  generateCharts() {
    this.country = this.route.snapshot.paramMap.get("country");
    this.http
      .get("https://api.covid19api.com/total/dayone/country/" + this.country)
      .subscribe(
        (data) => {
          let numb = Object.keys(data).length;

          for (let i = 0; i < numb; i++) {
            this.reportDate = data[i]["Date"];
            this.chartLabels[i] = new Date(
              this.reportDate
            ).toLocaleDateString();
            if (i == 0) {
              this.deathsData[i] = data[i]["Deaths"];
              this.recoveredData[i] = data[i]["Recovered"];
            } else {
              this.deathsData[i] = data[i]["Deaths"] - data[i - 1]["Deaths"];
              this.recoveredData[i] =
                data[i]["Recovered"] - data[i - 1]["Recovered"];
            }
          }

          // Object.entries(data).forEach(([key, value]) =>
          //   console.log(key, value)
          // );

          //console.log("Recovered " + this.Recovered);
          //console.log("Deaths " + this.Deaths);

          if (this.Recovered == true && this.Deaths == true) {
            this.chartData = [
              { data: this.deathsData, label: "Deaths" },
              { data: this.recoveredData, label: "Recovered" },
            ];
          } else {
            if (this.Recovered == true) {
              this.chartData = [
                { data: this.recoveredData, label: "Recovered" },
              ];
            } else if (this.Deaths == true) {
              this.chartData = [{ data: this.deathsData, label: "Deaths" }];
            } else {
              this.chartData = [
                { data: [], label: "Check one of the Options above" },
              ];
            }
          }
        },
        (err: HttpErrorResponse) => {
          console.log(err.message);
        }
      );
  }
}

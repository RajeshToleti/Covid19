import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { ChartOptions, ChartType, ChartDataSets } from "chart.js";
import { Label, Color } from "ng2-charts";
import { faChartBar } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-countries-grid",
  templateUrl: "./countries-grid.component.html",
  styleUrls: ["./countries-grid.component.scss"],
})
export class CountriesGridComponent implements OnInit {
  title = "Covid19";
  reportDate: Date;
  faChartBar = faChartBar;
  columnDefs = [
    {
      headerName: "Country",
      field: "Slug",
      sortable: true,
      filter: true,
      cellRenderer: (x) =>
        `<a href="countryDetails/${x.value}" >${x.value.toUpperCase()}</a>`,
    },
    {
      headerName: "Total Confirmed",
      field: "TotalConfirmed",
      sortable: true,
      filter: "agNumberColumnFilter",
    },
    {
      headerName: "New Confirmed",
      field: "NewConfirmed",
      sortable: true,
      filter: true,
    },
    {
      headerName: "Total Deaths",
      field: "TotalDeaths",
      sortable: true,
      filter: "agNumberColumnFilter",
    },
    {
      headerName: "New Deaths",
      field: "NewDeaths",
      sortable: true,
      filter: "agNumberColumnFilter",
    },
    {
      headerName: "New Recovered",
      field: "NewRecovered",
      sortable: true,
      filter: "agNumberColumnFilter",
    },
    {
      headerName: "Total Recovered",
      field: "TotalRecovered",
      sortable: true,
      filter: "agNumberColumnFilter",
    },
  ];

  defaultColDef: {
    width: 150;
    sortable: true;
    resizable: true;
    filter: true;
  };

  rowData: any;
  chartdata: any;
  //line Chart

  // chartOptions = {
  //   responsive: true
  // };

  // chartData = [
  //   { data: [330, 600, 260, 700], label: "Account A" },
  //   { data: [120, 455, 100, 340], label: "Account B" },
  //   { data: [45, 67, 800, 500], label: "Account C" }
  // ];

  // chartLabels = ["January", "February", "March", "April"];

  // onChartClick(event) {
  //   console.log(event);
  // }

  //bar chart
  barChartOptions: ChartOptions = {
    responsive: true,
    plugins: {
      datalabels: {
        display: function (context) {
          return context.dataset.barChartData[context.dataIndex] >= 100; // or >= 1 or ...
        },
      },
    },
  };

  barChartType: ChartType = "bar";
  barChartLegend = true;
  barChartPlugins = [];
  barChartColors: Color[] = [{ backgroundColor: "red" }];
  // barChartLabels: Label[] = [
  //   "Apple",
  //   "Banana",
  //   "Kiwifruit",
  //   "Blueberry",
  //   "Orange",
  //   "Grapes"
  // ];

  // barChartData: ChartDataSets[] = [
  //   { data: [45, 37, 60, 70, 46, 33], label: "Best Fruits" }
  // ];

  barChartLabels: Label[] = [];
  barChartData: ChartDataSets[] = [
    { data: [], label: "" },
    { data: [], label: "" },
  ];
  top25deathsData: Array<number> = [];
  top25InfectedData: Array<number> = [];
  constructor(private http: HttpClient) {}

  ngOnInit() {
    //this.rowData = this.http.get("https://api.covid19api.com/countries");
    //https://api.covid19api.com/dayone/country/IN/status/deaths/live
    this.http.get("https://api.covid19api.com/summary").subscribe(
      (data) => {
        delete data["Countries"][0];
        this.rowData = data["Countries"];
        this.reportDate = data["Date"];
        let top25Deaths = data["Countries"]
          .sort((a, b) => b.TotalDeaths - a.TotalDeaths)
          .slice(0, 25);

        //console.log(top25Deaths);
        for (let i = 0; i < 25; i++) {
          this.barChartLabels[i] = top25Deaths[i]["Country"]; //this.rowData[i]["Country"];
          //console.log(top25Deaths[i]["Country"]);
          this.top25deathsData[i] = top25Deaths[i]["TotalDeaths"];
          this.top25InfectedData[i] = top25Deaths[i]["TotalConfirmed"];
        }
        this.barChartData = [
          { data: this.top25deathsData, label: "TotalDeaths" },
          { data: this.top25InfectedData, label: "TotalInfected" },
        ];
      },
      (err: HttpErrorResponse) => {
        console.log(err.message);
      }
    );
  }
}

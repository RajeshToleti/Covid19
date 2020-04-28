import { Component } from "@angular/core";

import {
  faHome,
  faChartBar,
  faUser,
  faVirus,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  faHome = faHome;
  faVirus = faVirus;
  faChartBar = faChartBar;
  faUser = faUser;
  faEnvelope = faEnvelope;
  title = "Covid19";

  constructor() {}

  ngOnInit() {}
}

import { Component } from "@angular/core";

import {
  faHome,
  faUser,
  faVirus,
  faEnvelope,
  faGlobeAmericas,
} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  faHome = faHome;
  faVirus = faVirus;
  faUser = faUser;
  faEnvelope = faEnvelope;
  faGlobeAmericas = faGlobeAmericas;
  title = "Covid19";
  reportDate: Date;
  constructor() {}

  ngOnInit() {}
}

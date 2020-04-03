import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { WorldmapComponent } from "./worldmap/worldmap.component";

const routes: Routes = [{ path: "worldmap", component: WorldmapComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

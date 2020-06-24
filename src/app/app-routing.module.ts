import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomesiteComponent} from "./homesite/homesite.component";
import {DeveloperPanelComponent} from "./developer-panel/developer-panel.component";

const routes: Routes = [
  { path: '', component: HomesiteComponent },
  { path: 'developerPanel', component: DeveloperPanelComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

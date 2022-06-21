import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "src/app/shared/shared.module";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { MenuComponent } from "./components/elements/menu/menu.component";
import { EditTheatreComponent } from "./components/pages/theatre/edit/edit-theatre.component";
import { ListItemTheatreComponent } from "./components/pages/theatre/item/list-item-theatre.component";
import { ListTheatresComponent } from "./components/pages/theatre/list/list-theatres.component";

const dialogs = [
  EditTheatreComponent
];

const components = [
  DashboardComponent,
  MenuComponent,
  ListTheatresComponent,
  ListItemTheatreComponent
];

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        redirectTo: 'theatres',
        pathMatch: 'full',
      },
      {
        path: 'theatres',
        component: ListTheatresComponent
      },
      // {
      //   path: 'movie-showings',
      //   component: ListMovieShowingsComponent
      // }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    SharedModule,
    CommonModule,
    MatIconModule
  ],
  declarations: [
    ...components,
    ...dialogs
  ],
  providers: [

  ]
})
export class AdminModule {
}
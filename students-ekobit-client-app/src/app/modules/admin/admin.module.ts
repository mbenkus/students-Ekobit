import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "src/app/shared/shared.module";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { MenuComponent } from "./components/elements/menu/menu.component";
import { EditMovieComponent } from "./components/pages/movies/edit/edit-movie.component";
import { ListItemMovieComponent } from "./components/pages/movies/item/list-item-movie.component";
import { ListMoviesComponent } from "./components/pages/movies/list/list-movies.component";
import { EditTheatreComponent } from "./components/pages/theatre/edit/edit-theatre.component";
import { ListItemTheatreComponent } from "./components/pages/theatre/item/list-item-theatre.component";
import { ListTheatresComponent } from "./components/pages/theatre/list/list-theatres.component";
import { ListItemMovieShowingsComponent } from './components/pages/movie-showings/item/list-item-movie-showings.component';
import { ListMovieShowingsComponent } from "./components/pages/movie-showings/list/list-movie-showings.component";
import { EditMovieShowtimeComponent } from "./components/pages/movie-showings/edit/edit/edit-movie-showtime.component";

const dialogs = [
  EditTheatreComponent,
  EditMovieComponent,
  EditMovieShowtimeComponent
];

const components = [
  DashboardComponent,
  MenuComponent,
  ListTheatresComponent,
  ListItemTheatreComponent,
  ListMoviesComponent,
  ListItemMovieComponent,
  ListMovieShowingsComponent,
  ListItemMovieShowingsComponent
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
      {
        path: 'movies',
        component: ListMoviesComponent
      },
      {
        path: 'movie-showings',
        component: ListMovieShowingsComponent
      }
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
    ...dialogs,
  ],
  providers: [

  ]
})
export class AdminModule {
}
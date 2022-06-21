import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'es-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  activeUrl = '';

  title: string = '';

  PATHS = {
    Default: '/admin',
    Theatres: '/admin/theatres',
    MovieShowings: '/admin/movie-showings'
  };

  constructor(
    private router: Router
  ) {
  }

  async ngOnInit() {
    this.update(this.router.url);
  }

  private update(url: string) {
    this.activeUrl = url;

    if (url.indexOf(this.PATHS.Theatres) !== -1) {
      this.title = 'All Theatres';
    }

    if (url.indexOf(this.PATHS.MovieShowings) !== -1) {
      this.title = 'All Movie Showings';
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { TheatreService } from './core/services/theatre.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'students-ekobit-client-app';

  constructor(private service: TheatreService) {

  }

  async ngOnInit() {
    const x = await firstValueFrom(this.service.getAll());
    console.log(x);
  }
}

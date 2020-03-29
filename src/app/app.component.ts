import { Component } from '@angular/core';
import { ApiService } from 'src/service/api.service';
import { Router } from '@angular/router';
import { HeaderService } from './sub-component/header/header.service';
import { CarouselService } from './sub-component/carousel/carousel.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo-project';
  mainData: any;

  constructor(public api: ApiService, public router: Router, public header: HeaderService, public carsl: CarouselService) {
    // this.api.getDashboard().subscribe(data => {
    //   this.mainData = data;
    //   this.header.title = data.name;
    // });
  }
}

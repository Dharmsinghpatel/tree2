import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/service/api.service.js';
import { CarouselService } from 'src/app/sub-component/carousel/carousel.service';
import { HeaderService } from 'src/app/sub-component/header/header.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  dash: any;

  constructor(public api: ApiService, public carsl: CarouselService,
    public header: HeaderService, public router: Router) {
    this.carsl.show();
    this.api.getDashboard().subscribe(data => {
      console.log(data);
      this.dash = data;
      this.header.title = "Hi, " + data.name;
      this.carsl.setAdvertise(data.advs);
    });
  }

  ngOnInit() {
  }

  readEvent(event: any) {
    this.router.navigate(['/read', event]).then(nav => {
      console.log('Nav>>', nav);
    }, err => {
      console.log('NAv Eroor>>', err)
    })
  }

  ngOnDestroy() {
    this.carsl.hide();
  }

}

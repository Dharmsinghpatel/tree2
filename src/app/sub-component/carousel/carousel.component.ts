import { Component, OnInit } from '@angular/core';
import { CarouselService } from './carousel.service';
import { ApiService } from 'src/service/api.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  advs: any;
  constructor(public carsl: CarouselService,
    public api: ApiService,
    public route: ActivatedRoute,
    public router: Router,
  ) {
  }

  ngOnInit() {
  }

  ngDoCheck() {
    this.advs = this.carsl.getAdvetise();
  }

  openDoc(link) {
    if (link != undefined && link != null && link != '') {
      link.indexOf('http') > -1 ? window.open(link, "_blank") :
        this.router.navigate(['/info', link]);

    }
  }

}

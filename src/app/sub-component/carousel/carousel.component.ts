import { Component, OnInit, Input } from '@angular/core';
import { CarouselService } from './carousel.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  advs: any;
  constructor(public carsl: CarouselService) {
  }

  ngOnInit() {
  }

  ngDoCheck() {
    this.advs = this.carsl.getAdvetise();
    console.log(this.advs, this.carsl.visible);
  }

}

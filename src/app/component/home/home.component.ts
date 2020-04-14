import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/service/api.service.js';
import { CarouselService } from 'src/app/sub-component/carousel/carousel.service';
import { HeaderService } from 'src/app/sub-component/header/header.service';
import { Router } from '@angular/router';
import { NavbarService } from 'src/app/sub-component/navbar/navbar.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  dash: any;
  constructor(public api: ApiService, public carsl: CarouselService,
    public header: HeaderService, public router: Router, public navService: NavbarService) {
    this.carsl.show();
    navService.isSearch = false;
    navService.isType = false;

    this.api.getDashboard().subscribe(data => {
      console.log(data);
      this.dash = data;
      this.header.hide();
      this.navService.isName = "Welcome to You!";
      // this.navService.isName = "Hi, " + data.name;
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

  navigate(type: string, id: string) {
    this.router.navigate(['/' + type, id]).then(nav => {
      console.log('Nav>>', nav);
    }, err => {
      console.log('NAv Eroor>>', err)
    })
  }

  ngOnDestroy() {
    this.carsl.hide();
    this.navService.isName = "";
  }

}

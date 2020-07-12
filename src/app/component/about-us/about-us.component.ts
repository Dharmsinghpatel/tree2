import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/sub-component/header/header.service';
import { AppSettings } from '../../config/AppSettings'
import { NavbarService } from 'src/app/sub-component/navbar/navbar.service';


@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  logo = AppSettings.LOGO;
  constructor(public header: HeaderService,
    public navService: NavbarService
  ) {
    this.header.hide();
    navService.metaData = [{ name: "description", content: "Know about us" },
    { name: "keywords", content: "agriarbor, about, agri arbor about, agriarbor about" }];

    navService.metaTitle = 'About';
  }

  ngOnInit(): void {
    window.scroll(0, 0);
  }

}

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
    navService.metaData = [{ name: "description", content: "Welcome to Agri Arbor. We're dedicated to giving you the very best of content related to agriculture." },
    { name: "keywords", content: "agri arbor about, agriarbor about, agriarbor about us" }];

    navService.metaTitle = 'About';
  }

  ngOnInit(): void {
    window.scroll(0, 0);
  }

}

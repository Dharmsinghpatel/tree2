import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/sub-component/header/header.service';
import { AppSettings } from '../../config/AppSettings'


@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  logo = AppSettings.LOGO;
  constructor(public header: HeaderService) {
    this.header.hide();
  }

  ngOnInit(): void {
    window.scroll(0, 0);
  }

}

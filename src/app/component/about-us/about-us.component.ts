import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/sub-component/header/header.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  constructor(public header: HeaderService) {
    this.header.hide();
  }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/sub-component/header/header.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  constructor(
    public header: HeaderService
  ) {
    this.header.hide();
  }

  ngOnInit(): void {
  }

}

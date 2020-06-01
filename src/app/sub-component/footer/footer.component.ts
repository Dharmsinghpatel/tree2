import { Component, OnInit } from '@angular/core';
import { AppSettings } from '../../config/AppSettings'
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  logo = AppSettings.LOGO;
  constructor(
    public translate: TranslateService,
  ) { }

  ngOnInit() {
  }

}

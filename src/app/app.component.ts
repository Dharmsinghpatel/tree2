import { Component } from '@angular/core';
import { ApiService } from 'src/service/api.service';
import { Router } from '@angular/router';
import { HeaderService } from './sub-component/header/header.service';
import { CarouselService } from './sub-component/carousel/carousel.service';
import { TranslateService } from '@ngx-translate/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo-project';
  mainData: any;
  closeResult: string;

  constructor(public api: ApiService,
    public router: Router, public header: HeaderService,
    public translate: TranslateService,
    private modalService: NgbModal,
    public carsl: CarouselService) {
    this.translate.addLangs(['en', 'hi', 'hg']);
    this.translate.setDefaultLang('en');
  }

  switchLang(lang: string) {
    this.translate.use(lang);
  }

}

import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../header/header.service';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { CarouselService } from '../carousel/carousel.service';
import { ApiService } from 'src/service/api.service';
import { FloattabService } from './floattab.service';

@Component({
  selector: 'app-floattab',
  templateUrl: './floattab.component.html',
  styleUrls: ['./floattab.component.scss']
})
export class FloattabComponent {
  title = 'demo-project';
  mainData: any;
  closeResult: string;
  lang: string = 'en';

  constructor(public api: ApiService,
    public router: Router, public header: HeaderService,
    public translate: TranslateService,
    private modalService: NgbModal,
    public carsl: CarouselService,
    public floattab: FloattabService) {

  }

  ngOnInit() {

    let lang = localStorage.getItem('lang');
    this.lang = lang ? lang : 'en';

    console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>', this.lang)
  }

  ngDoCheck() {
    this.floattab = this.floattab;
  }

  switchLang(lang: string) {
    localStorage.setItem('lang', lang)
    this.translate.use(lang);
  }

  //modal
  openModal(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}

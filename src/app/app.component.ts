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
    console.log(lang);
    this.translate.use(lang);
  }

  public signIn() {

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

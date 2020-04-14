import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { SidebarComponent } from '../sidebar/sidebar.component'
import { NavbarService } from './navbar.service';
import { ReadingComponent } from 'src/app/component/reading/reading.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @ViewChild(SidebarComponent) side: SidebarComponent;
  navService: any = {};
  title = 'appBootstrap';
  closeResult: string;

  searchForm = this.fb.group({
    search: ['']

  });
  constructor(public navbar: NavbarService, private fb:
    FormBuilder, public read: ReadingComponent,
    public translate: TranslateService,
    private modalService: NgbModal
  ) {

  }

  ngOnInit() {
    this.translate.addLangs(['en', 'hi', 'hg']);
    this.translate.setDefaultLang('en');
    // this.side.sideBarToggle();
  }

  sideToggle() {
    this.side.sideBarToggle();
  }

  ngDoCheck() {
    this.navService = this.navbar;
  }

  switchLang(lang: string) {
    console.log(lang);
    this.translate.use(lang);
  }

  onSubmit() {
    this.navService.search = this.searchForm.value.search;
    this.read.searchMethod(this.searchForm);
  }

  //modal
  open(content) {
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

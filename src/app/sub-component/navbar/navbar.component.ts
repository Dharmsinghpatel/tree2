import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { SidebarComponent } from '../sidebar/sidebar.component'
import { NavbarService } from './navbar.service';
import { ReadingComponent } from 'src/app/component/reading/reading.component';
import { ApiService } from 'src/service/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AppSettings } from '../../config/AppSettings'

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
  currentRoute = '';
  logo = AppSettings.LOGO;
  productType = 'all';

  searchForm = this.fb.group({
    product_name: ['']

  });
  constructor(public navbar: NavbarService, private fb:
    FormBuilder, public read: ReadingComponent,
    public api: ApiService,
    public route: ActivatedRoute,
    public router: Router,
    public translate: TranslateService,
    private modalService: NgbModal
  ) {

  }

  ngOnInit() {
    this.translate.addLangs(['en', 'hi', 'hg']);
    this.translate.setDefaultLang('en');
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

  getDropdown(value) {
    document.getElementById('select_button').innerHTML = this.productType = value;
  }

  onSubmit() {
    // this.navService.search = this.searchForm.value.search;
    this.searchForm.value['product_type'] = this.productType;
    this.currentRoute = localStorage.getItem('currentRoute');
    this.currentRoute != 'video' ?
      this.searchDocument(this.searchForm.value) :
      this.searchVideo(this.searchForm.value);
  }

  searchDocument(data) {
    data['display_type'] = this.currentRoute;
    this.api.search(data).subscribe(res => {
      if (res.status == 'success') {
        this.navbar.searchTopics = res.data;
      }
    })
  }

  searchVideo(data) {
    data['display_type'] = this.currentRoute;
    this.api.search(data).subscribe(res => {
      if (res.status == 'success') {
        this.navbar.searchVideoes = res.data;
      }
    })
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

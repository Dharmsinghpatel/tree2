import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { SidebarComponent } from '../sidebar/sidebar.component'
import { NavbarService } from './navbar.service';
import { ReadingComponent } from 'src/app/component/reading/reading.component';
import { ApiService } from 'src/service/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AppSettings } from '../../config/AppSettings';
import { Meta, Title } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';


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
  searchItem = 'filter';

  searchForm = this.fb.group({
    product_name: ['']
  });

  constructor(public navbar: NavbarService, private fb:
    FormBuilder, public read: ReadingComponent,
    public api: ApiService,
    public route: ActivatedRoute,
    private meta: Meta,
    private ptitle: Title,
    public router: Router,
    public translate: TranslateService,
    private modalService: NgbModal,
    public toastr: ToastrService,

  ) {
     router.events.subscribe((val) => {
        this.searchItem = 'filter';
        this.productType = 'all'
        this.searchForm.setValue({
          product_name:''
        })
    });
  }

  ngOnInit() {
    let lang = localStorage.getItem('lang');
    lang = lang ? lang : 'en';
    this.translate.addLangs(['en', 'hi', 'hg']);
    this.translate.setDefaultLang(lang);
  }

  sideToggle() {
    this.side.sideBarToggle();
  }

  ngDoCheck() {
    let lang = localStorage.getItem('lang');
    lang = lang ? lang : 'en';
    this.navService = this.navbar;
     console.log('>>>');
    let metaTags = this.navService.metaData == undefined ? [] : this.navService.metaData;
    let pageTitle = this.navService.metaTitle.replace(/\//gi, " ");
    console.log(pageTitle);
    pageTitle = (pageTitle != undefined && pageTitle != ' ') ? pageTitle : 'HOME';

    this.ptitle.setTitle(pageTitle);

    if (metaTags.length > 0) {
      metaTags.forEach(tag => {
        this.meta.updateTag(tag);
      });
    }
  }

  getDropdown(value) {
    // document.getElementById('select_button').innerHTML = this.productType = value;
    this.searchItem = this.productType = value;
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
        this.toastr.success(res.msg)
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

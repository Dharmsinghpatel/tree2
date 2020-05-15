import { Component, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderService } from 'src/app/sub-component/header/header.service';
import { ApiService } from 'src/service/api.service';
import { NavbarService } from 'src/app/sub-component/navbar/navbar.service';
import { FloattabService } from 'src/app/sub-component/floattab/floattab.service';

@Component({
  selector: 'app-reading',
  templateUrl: './reading.component.html',
  styleUrls: ['./reading.component.scss']
})
export class ReadingComponent implements OnInit {
  topic: any = [];
  topics: any = [];
  currentRoute = '';
  isTopic: boolean = false;
  isModal: boolean = false;

  constructor(public header: HeaderService,
    public api: ApiService,
    public route: ActivatedRoute,
    public router: Router,
    public navbar: NavbarService,
    public floattab: FloattabService) {
    this.header.show();
    this.header.title = 'Loading ...'
  }

  ngOnInit(): void {
    this.route.data.subscribe(routeData => {
      localStorage.setItem('currentRoute', routeData['type']);
      this.currentRoute = routeData['type'];
      this.route.paramMap.subscribe(paramMap => {
        let id = paramMap.get('id');

        if (id != undefined && id != null && id != '') {
          this.isTopic = true;

          this.api.getTopicDetail({ id: id }).subscribe(res => {
            if (res.status == 'success') {
              this.topic = res.data;
              this.header.title = this.topic['title'];
              this.navbar.isSearch = false;
              this.navbar.isType = false;
              this.floattab.isBack = true;
              console.log(routeData)
              this.floattab.backNav = routeData.type;
            }
          })
          return;
        }

        this.api.getTopics(routeData).subscribe(res => {
          if (res.status == 'success') {
            this.topics = res.data;
            this.floattab.isBack = false;
            this.floattab.backNav = "";
            this.header.hide();
            this.navbar.isSearch = true;
            this.navbar.isType = true;
          }
        })
      })
    })
  }

  ngDoCheck() {
    let temp = this.navbar.searchTopics;
    this.topics = temp && temp.length > 0 ? temp : this.topics;
  }

  navigate(type: string, id: string) {
    this.router.navigate(['/' + type, id]).then(nav => {
      console.log('Nav>>', nav);
    }, err => {
      console.log('NAv Eroor>>', err)
    })
  }

  ngOnDestroy() {
    this.navbar.isSearch = false;
    this.navbar.isType = false;
    this.floattab.isBack = false;
    this.floattab.backNav = "";
    this.header.hide();
  }

}
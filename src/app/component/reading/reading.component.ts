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
  isModal: boolean = true;

  constructor(public header: HeaderService,
    public api: ApiService,
    public route: ActivatedRoute,
    public router: Router,
    public navbar: NavbarService,
    public floattab: FloattabService, ) {
    this.header.show();
    this.header.title = 'loading'
  }

  ngOnInit(): void {
    window.scroll(0, 0);
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
              this.floattab.backNav = routeData.type;
              this.navbar.metaData = this.topic.meta;
              this.navbar.metaTitle = this.topic['title'];
            }
          })
          return;
        }

        this.api.getTopics(routeData).subscribe(res => {
          if (res.status == 'success') {
            this.topics = res.data.topics;
            this.floattab.isBack = false;
            this.floattab.backNav = "";
            this.header.hide();
            this.navbar.isSearch = true;
            this.navbar.isType = true;
            this.navbar.metaData = res.data.meta;
            this.navbar.metaTitle = routeData['type'];
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
    if (type != 'external') {
      // let url = this.router.createUrlTree(['/' + type, id])
      // window.open(url.toString(), '_blank');
      this.router.navigate(['/' + type, id]);

    } else {
      window.open(id, "_blank");
    }
  }

  ngOnDestroy() {
    this.navbar.isSearch = false;
    this.navbar.isType = false;
    this.floattab.isBack = false;
    this.floattab.backNav = "";
    this.header.hide();
  }

}

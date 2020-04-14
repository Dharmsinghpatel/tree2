import { Component, OnInit } from '@angular/core';
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
  reading: any;
  isTopic: boolean = false;
  isModal: boolean = false;

  constructor(public header: HeaderService,
    public api: ApiService,
    public route: ActivatedRoute,
    public router: Router,
    public navbar: NavbarService,
    public floattab: FloattabService) {
    this.header.show();
    this.header.title = 'Reading Content';

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      let id = paramMap.get('id');
      if (id != undefined && id != null && id != '') {
        this.isTopic = true;
        this.api.getTopic().subscribe(res => {
          this.header.title = res[0]['title'];
          this.reading = res[0];
          this.navbar.isSearch = false;
          this.navbar.isType = false;
          this.floattab.isBack = true;
          this.floattab.backNav = "read";
        })
        return;
      }

      this.api.getReading().subscribe(data => {
        this.floattab.isBack = false;
        this.floattab.backNav = "";
        this.reading = data;
        this.header.hide();
        this.navbar.isSearch = true;
        this.navbar.isType = true;
      })
    })
  }


  searchMethod(value) {
    console.log('search>>', value);
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

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeaderService } from 'src/app/sub-component/header/header.service';
import { ApiService } from 'src/service/api.service';

@Component({
  selector: 'app-reading',
  templateUrl: './reading.component.html',
  styleUrls: ['./reading.component.scss']
})
export class ReadingComponent implements OnInit {
  reading: any;
  isTopic: boolean = false;

  constructor(public header: HeaderService,
    public api: ApiService,
    public route: ActivatedRoute) {
    this.header.title = 'Reading Content'
  }

  ngOnInit(): void {

    this.route.paramMap.subscribe(paramMap => {
      let id = paramMap.get('id');

      console.log("id>>", id);
      if (id != undefined && id != null && id != '') {
        this.isTopic = true;
        this.api.getTopic().subscribe(res => {
          console.log("Topic", res);
          this.header.title = res[0]['title'];
          this.reading = res[0];
        })
        return;
      }

      this.api.getReading().subscribe(data => {
        console.log(data);
        this.reading = data;
      })
    })
  }

}

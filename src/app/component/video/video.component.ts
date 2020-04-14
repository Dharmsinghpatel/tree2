import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/service/api.service';
import { ActivatedRoute } from '@angular/router';
import { NavbarService } from 'src/app/sub-component/navbar/navbar.service';
import { HeaderService } from 'src/app/sub-component/header/header.service';
import { YoutubeService } from 'src/app/sub-component/youtube-player/youtube.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {

  video: any;
  ivideo: any;
  isVideo: boolean = false;
  isModal: boolean = false;

  constructor(public header: HeaderService,
    public api: ApiService,
    public route: ActivatedRoute,
    public navbar: NavbarService,
    public youtube: YoutubeService) {
    this.navbar.isSearch = true;
    this.navbar.isType = true;
    this.header.hide();
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      let id = paramMap.get('id');
      if (id != undefined && id != null && id != '') {
        this.isVideo = true;
        this.api.getVideo().subscribe(res => {
          console.log("Topic", res);
          this.video = res[0];
        })
        return;
      }

      this.api.getVideo().subscribe(res => {
        this.video = res;
        this.ivideo = res['content'][0];
      })
    })
  }


  searchMethod(value) {
    console.log('search>>', value);
  }

  play(video: any) {
    this.ivideo = video;
    this.youtube.youtubeVideo = video;
  }

  ngOnDestroy() {
    this.navbar.isSearch = false;
    this.navbar.isType = false;
  }

}

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

  videoes: any = [];
  video: any = [];
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
    this.route.data.subscribe(routeData => {
      localStorage.setItem('currentRoute', routeData['type']);
    })
    this.navbar.metaData = [{ name: "description", content: "Enjoy videos!" },
    { name: "keywords", content: "agriarbor, video, agri arbor video, agriarbor video" }];
    this.navbar.metaTitle = 'Videos';
  }

  ngOnInit(): void {
    window.scroll(0, 0);

    this.route.paramMap.subscribe(paramMap => {
      let id = paramMap.get('id');
      if (id != undefined && id != null && id != '') {
        this.isVideo = true;
        this.api.getVideoes({ id: id }).subscribe(res => {
          if (res.status == 'success') {
            this.video = res[0];
          }
        })
        return;
      }

      this.api.getVideoes({}).subscribe(res => {
        if (res.status == 'success') {
          this.videoes = res.data.videos;
          this.ivideo = res.data.videos[0];
          this.navbar.metaData = res.data.meta;;
        }
      })
    })
  }

  ngDoCheck() {
    let temp = this.navbar.searchVideoes;
    this.videoes = temp && temp.length > 0 ? temp : this.videoes;
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

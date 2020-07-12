import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { YoutubeService } from './youtube.service';
import { AppSettings } from '../../config/AppSettings'
import { ApiService } from 'src/service/api.service';

// import reframe from 'reframe.js';

@Component({
  selector: 'app-youtube-player',
  templateUrl: './youtube-player.component.html',
  styleUrls: ['./youtube-player.component.scss']
})
export class YoutubePlayerComponent implements OnInit {
  @Input('youtube-id') youtubId: string;
  @Input('image') image: string;
  @Input('id') idI: string;
  @Input('is-modal') isModal: boolean = true;
  // @ViewChild('player', { static: false }) public player: ElementRef;
  playVideo = false;
  youtube_link: any;
  logo = '';

  title = 'appBootstrap';
  closeResult: string;

  constructor(
    private modalService: NgbModal,
    public youtube: YoutubeService,
    public api: ApiService
  ) {
    this.logo = AppSettings.LOGO;
  }


  ngOnInit() {
    this.youtube_link = "https://www.youtube.com/embed/" + this.youtubId + '?autoplay=1';
  }

  //overload previous video
  ngDoCheck() {

    this.youtubId = this.youtube.youtubeVideo.id ? this.youtube.youtubeVideo.link : this.youtubId;
    this.youtube_link = "https://www.youtube.com/embed/" + this.youtubId + '?autoplay=1';
    window.scrollTo(0, 0);
  }

  open(content) {
    this.api.analytic({ 'video_id': this.youtubId }).subscribe(res => { });

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

  play() {
    this.api.analytic({ 'video_id': this.youtubId }).subscribe(res => { });
    this.youtube_link = "https://www.youtube.com/embed/" + this.youtubId;
    this.playVideo = true;
  }

}

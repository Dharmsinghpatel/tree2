import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { YoutubeService } from './youtube.service';
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

  title = 'appBootstrap';
  closeResult: string;

  constructor(
    private modalService: NgbModal,
    public youtube: YoutubeService
  ) {
  }


  ngOnInit() {
    // this.videoPlayer();
    this.youtube_link = "https://www.youtube.com/embed/" + this.youtubId;
    console.log(this.youtube_link);
  }

  ngDoCheck() {
    this.youtubId = this.youtube.youtubeVideo.id;
    this.youtube_link = "https://www.youtube.com/embed/" + this.youtubId;
    window.scrollTo(0, 0);
  }

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

  play() {
    console.log('change id>>', this.youtubId, this.image);
    this.youtube_link = "https://www.youtube.com/embed/" + this.youtubId;
    this.playVideo = true;
  }
}

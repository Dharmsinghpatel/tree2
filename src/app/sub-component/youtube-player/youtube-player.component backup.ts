import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import reframe from 'reframe.js';

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

  youtube_link: any;
  isVideoStart: boolean = false;
  public YT: any;
  public video: any;
  public player: any;
  public reframed: Boolean = false;

  title = 'appBootstrap';
  closeResult: string;

  constructor(
    private modalService: NgbModal
  ) {
  }

  init() {
    var tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  }

  ngOnInit() {
    // this.videoPlayer();
    this.youtube_link = "https://www.youtube.com/embed/" + this.youtubId;
    console.log(this.youtube_link);
  }

  startVideo(id = '') {
    // let videoRef;
    // videoRef = document.getElementById(id);
    // console.log('click', id, videoRef);
    // videoRef.play();

  }


  videoPlayer() {
    this.init();
    // this.video = '1cH2cerUpMQ' //video id
    this.video = this.youtubId//video id

    window['onYouTubeIframeAPIReady'] = (e) => {
      this.YT = window['YT'];
      this.reframed = false;
      console.log('video', e);
      this.player = new window['YT'].Player('player', {
        videoId: this.video,

        playerVars: { 'origin': 'http://localhost:4200' },
        events: {
          'onStateChange': this.onPlayerStateChange.bind(this),
          'onError': this.onPlayerError.bind(this),
          'onReady': (e) => {
            if (!this.reframed) {
              this.reframed = true;
              // reframe(e.target.a);
            }
          }
        }
      });
    };
  }

  onPlayerStateChange(event) {
    console.log(event)
    switch (event.data) {
      case window['YT'].PlayerState.PLAYING:
        if (this.cleanTime() == 0) {
          console.log('started ' + this.cleanTime());
        } else {
          console.log('playing ' + this.cleanTime())
        };
        break;
      case window['YT'].PlayerState.PAUSED:
        if (this.player.getDuration() - this.player.getCurrentTime() != 0) {
          console.log('paused' + ' @ ' + this.cleanTime());
        };
        break;
      case window['YT'].PlayerState.ENDED:
        console.log('ended ');
        break;
    };
  };
  //utility
  cleanTime() {
    return Math.round(this.player.getCurrentTime())
  };
  onPlayerError(event) {
    switch (event.data) {
      case 2:
        console.log('' + this.video)
        break;
      case 100:
        break;
      case 101 || 150:
        break;
    };
  };


  open(content) {
    this.videoPlayer();
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
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

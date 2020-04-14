import { Injectable } from '@angular/core';

@Injectable()
export class YoutubeService {
    youtubeVideo: any;

    constructor() {
        this.youtubeVideo = '';
    }

}
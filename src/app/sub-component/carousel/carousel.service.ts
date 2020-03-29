import { Injectable } from '@angular/core';

@Injectable()
export class CarouselService {
    visible: boolean;
    advs: any = [];

    constructor() { this.visible = false; }

    hide() { this.visible = false; }

    show() { this.visible = true; }

    toggle() { this.visible = !this.visible; }

    setAdvertise(advs: any) {
        console.log('advs', advs);
        this.advs = advs;
    }

    getAdvetise() {
        return this.advs;
    }

}
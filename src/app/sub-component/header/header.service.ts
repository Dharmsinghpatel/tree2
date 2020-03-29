import { Injectable } from '@angular/core';

@Injectable()
export class HeaderService {
    visible: boolean;
    title: string;

    constructor() {
        this.visible = false;
        this.title = '';
    }

    hide() { this.visible = false; }

    show() { this.visible = true; }

    toggle() { this.visible = !this.visible; }

}
import { Injectable } from '@angular/core';

@Injectable()
export class NavbarService {
    visible: boolean;
    isSearch: boolean = false;
    isType: boolean = false;
    isSignIn: boolean = false;
    isName: string = '';
    type: string = '';
    search: string = '';
    searchTopics: any = [];
    searchVideoes: any = [];

    constructor() {
        this.visible = false;
    }

    hide() { this.visible = false; }

    show() { this.visible = true; }

    toggle() { this.visible = !this.visible; }

}
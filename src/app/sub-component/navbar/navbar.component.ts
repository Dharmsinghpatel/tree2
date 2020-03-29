import { Component, OnInit, ViewChild } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @ViewChild(SidebarComponent) side: SidebarComponent;

  constructor() { }

  ngOnInit() {
    // this.side.sideBarToggle();
  }

  sideToggle() {
    this.side.sideBarToggle();
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  width: string = "0px";

  sideBarToggle() {
    this.width = this.width == '0px' ? '250px' : '0px';
    document.getElementById("sidenavId").style.width = this.width;
  }
}

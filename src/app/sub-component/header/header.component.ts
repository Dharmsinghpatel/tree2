import { Component, OnInit, Input } from '@angular/core';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title: string;
  constructor(public header: HeaderService) {
  }

  ngOnInit() {
  }

  ngDoCheck() {
    this.title = this.header.title;
  }

}

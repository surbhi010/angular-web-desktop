import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-wrapper',
  templateUrl: './app-wrapper.component.html',
  styleUrls: ['./app-wrapper.component.scss']
})
export class AppWrapperComponent implements OnInit {

  @Input() title: string;

  @Input() sidebarLinks: Array<Object>;

  constructor() { }

  ngOnInit() {
  }

}

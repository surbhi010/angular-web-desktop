import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  links = [
    {
      name: 'App2 - Sec1',
      route: 'sec1',
    },
    {
      name: 'App2 - Sec2',
      route: 'sec2',
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}

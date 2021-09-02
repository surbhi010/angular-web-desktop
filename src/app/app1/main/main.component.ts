import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  links = [
    {
      name: 'App1 - Sec1',
      route: 'sec1',
    },
    {
      name: 'App1 - Sec2',
      route: 'sec2',
    },
    {
      name: 'App1 - Sec3',
      route: 'sec3',
    },
    {
      name: 'App1 - Sec4',
      route: 'sec4',
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}

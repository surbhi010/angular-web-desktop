import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {
  content = '';

  constructor(private route: ActivatedRoute) { 
    this.content = route.snapshot.data.content;
  }

  ngOnInit() {
  }

}

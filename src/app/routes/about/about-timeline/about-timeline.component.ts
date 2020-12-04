import { Component, OnInit } from '@angular/core';
import { AboutTimelineHelper } from './about-timeline-helper';

@Component({
  selector: 'app-about-timeline',
  templateUrl: './about-timeline.component.html',
  styleUrls: ['./about-timeline.component.scss']
})
export class AboutTimelineComponent implements OnInit {

  public timelineOptions = {}

  constructor(private aboutTimelineHelper: AboutTimelineHelper) { }

  ngOnInit() {
    this.timelineOptions = this.aboutTimelineHelper.getTimelineOptions()
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one-page-home',
  templateUrl: './one-page-home.component.html',
  styleUrls: ['./one-page-home.component.scss']
})
export class OnePageHomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  navigationOnClick = async (el: HTMLElement) => {
    el.scrollIntoView({behavior: 'smooth'})
  }
}

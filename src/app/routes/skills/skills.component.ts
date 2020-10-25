import { Component, OnInit } from '@angular/core';
import { fader } from 'src/app/route-animation';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  animations: [
    fader
  ]
})
export class SkillsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

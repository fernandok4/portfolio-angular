import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {

  @ViewChild('character') character: ElementRef

  constructor() { }

  ngOnInit() {
  }

  move = (pixels: number) => {
    console.log('character', this.character, pixels)
  }

}

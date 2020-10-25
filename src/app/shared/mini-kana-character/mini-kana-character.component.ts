import { Component, OnInit, ViewChild } from '@angular/core';
import { throws } from 'assert';
import { CharacterComponent } from './character/character.component';

@Component({
  selector: 'app-mini-kana-character',
  templateUrl: './mini-kana-character.component.html',
  styleUrls: ['./mini-kana-character.component.scss']
})
export class MiniKanaCharacterComponent implements OnInit {

  @ViewChild('character') character: CharacterComponent

  constructor() { }

  ngOnInit() {
  }

  move = (side: 'left' | 'right', steps: string) => {
    if(!this.stepFormatValidation(steps)) throw ("Invalid step format, it need to be in viewport width format")
    let stepsViewportWidthValue = this.stepViewportWidthValue(steps)
    let stepsPixelValue = this.convertViewportWidthToPixel(stepsViewportWidthValue) * (side == 'left' ? -1 : 1)
    this.character.move(stepsPixelValue)
  }

  private stepFormatValidation = (text: string): boolean => RegExp(/\d+vw/g).test(text)

  private stepViewportWidthValue = (text: string): number => Number(text.match(/\d+/g)[0])

  private convertViewportWidthToPixel = (stepsViewportWidthValue: number) => {
    const screenSize = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
    return (stepsViewportWidthValue / 100) * screenSize
  }
}

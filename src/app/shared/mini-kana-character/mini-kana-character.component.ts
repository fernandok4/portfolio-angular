import { sanitizeIdentifier } from '@angular/compiler';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { CharacterComponent } from './character/character.component';
import { MiniKanaCharacterService } from './mini-kana-character.service';

@Component({
  selector: 'app-mini-kana-character',
  templateUrl: './mini-kana-character.component.html',
  styleUrls: ['./mini-kana-character.component.scss']
})
export class MiniKanaCharacterComponent implements OnInit {

  @ViewChild('character') character: CharacterComponent
  private characterActionSubscribe: Subscription
  private mapAction
  constructor(private miniKanaCharacterService: MiniKanaCharacterService) { }

  ngOnInit() {
    this.characterActionSubscribe = this.miniKanaCharacterService.characterActionSubscribe.subscribe(this.handleAction)
    this.createMapAction()
  }

  ngOnDestroy(){
    this.characterActionSubscribe.unsubscribe()
  }

  private createMapAction = () => {
    this.mapAction = {
      "MOVE": this.move
    }
  }

  private handleAction = (eventOptions) => {
    let functionName = this.mapAction[eventOptions.type]
    functionName(eventOptions)
  }

  private move = (eventOptions) => {
    let { side, steps } = eventOptions
    if(!this.stepFormatValidation(steps)) throw ("Invalid step format, it need to be in viewport width format")
    let stepsViewportWidthValue = this.stepViewportWidthValue(steps)
    let stepsPixelValue = this.convertViewportWidthToPixel(stepsViewportWidthValue) * (side == 'left' ? -1 : 1)
    this.character.move(stepsPixelValue)
  }

  private stepFormatValidation = (text: string): boolean => RegExp(/\d+vw/g).test(text)

  private stepViewportWidthValue = (text: string): number => Number(text.match(/\d+/g)[0])

  private convertViewportWidthToPixel = (stepsViewportWidthValue: number) => {
    const screenSize = document.documentElement.clientWidth
    return (stepsViewportWidthValue / 100) * screenSize
  }
}

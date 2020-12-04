import { Component, OnInit } from '@angular/core';
import { fader } from 'src/app/route-animation';
import { MiniKanaCharacterService } from 'src/app/shared/mini-kana-character/mini-kana-character.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    fader
  ]
})
export class HomeComponent implements OnInit {

  private typeTextList = [
    "Olá, sou Fernando Kanashiro",
    "Desenvolvedor Full Stack",
    "Apaixonado por Tecnologia"
  ]
  public currentTypeText = ""
  private currentLetter = 0
  private currentText = 0
  private mode: 'type' | 'undo' = 'type'
  private modeMapFunction = {
    'type': 'typeLetter',
    'undo': 'undoLetter'
  }
  private modeMapSpeedMs = {
    'type': 70,
    'undo': 35
  }

  constructor(private miniKanaCharacterService: MiniKanaCharacterService) { }

  ngOnInit() {
    this.startCharacterMove()
    this.typeText()
  }

  private startCharacterMove = () => {
    setTimeout(() => {
      this.miniKanaCharacterService.move("right", '70vw')
    }, 500)
  }

  private typeText = async () => {
    while(true){
      let text = this.typeTextList[this.currentText]
      let nextLetter = text[this.currentLetter]
      let functionName = this.modeMapFunction[this.mode]
      let condition = this.mode == 'type' ? Boolean(text[this.currentLetter]) : Boolean(this.currentTypeText)
      if(condition){
        await this[functionName](nextLetter, text)
      } else {
        this.mode = this.mode == 'type' ? 'undo' : 'type'
      }
      await this.sleepType(this.modeMapSpeedMs[this.mode])
    }
  }

  private undoLetter = (nextLetter, text) => {
    this.currentLetter -= 1
    this.currentTypeText = this.currentTypeText.split("").splice(0, this.currentLetter).join("")
    if(!this.currentTypeText){
      this.currentText = ++this.currentText % this.typeTextList.length
    }
  }

  private typeLetter = async (nextLetter, text) => {
    this.currentTypeText = this.currentTypeText + nextLetter
    this.currentLetter += 1
    if(this.currentLetter == text.length){
      await this.sleepType(3000)
    }
  }

  private sleepType = async (millis) => {
    await new Promise(resolve => setTimeout(resolve, millis));
  }
}

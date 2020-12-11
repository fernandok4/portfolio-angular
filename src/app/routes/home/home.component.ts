import { Component, OnInit, Renderer2, ViewChild } from '@angular/core';
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
    "Seja bem vindo ao meu site!"
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
  @ViewChild('videoHome') videoHome;
  @ViewChild('homeContainer') homeContainer;
  private bubbles = []

  constructor(private miniKanaCharacterService: MiniKanaCharacterService, private renderer: Renderer2) { }

  ngOnInit() {
    this.startCharacterMove()
    this.typeText()
    this.verifyBubbles()
  }

  private startCharacterMove = () => {
    setTimeout(() => {
      this.miniKanaCharacterService.move("right", '70vw')
      console.log('videoHome', this.videoHome)
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

  public createWaterBubble = () => {
    let precision = 0.10
    if(this.videoHome && (this.videoHome.nativeElement.currentTime < 5.71 + precision && this.videoHome.nativeElement.currentTime > 5.71 - precision)){
      let bubbleContainer =  this.renderer.createElement('div')
      this.renderer.addClass(bubbleContainer, "bubbles")
      let bubble = this.createBubble(200, 300)
      this.renderer.appendChild(bubbleContainer, bubble)
      this.renderer.appendChild(this.homeContainer.nativeElement, bubbleContainer)
      this.bubbles.push(bubbleContainer)
    }
  }

  public createBubble = (minSize, maxSize) => {
    let bubble = this.renderer.createElement('div')
    let height = this.videoHome.nativeElement.height
    let width = this.videoHome.nativeElement.width
    let top = this.videoHome.nativeElement.offsetTop - (height * 0.3)
    let left = this.videoHome.nativeElement.offsetLeft + (width * 0.35)
    let diameter = ((maxSize - minSize) * Math.random()) + minSize
    this.renderer.setStyle(bubble, 'left', `${left}px`)
    this.renderer.setStyle(bubble, 'top', `${top}px`)
    this.renderer.setStyle(bubble, 'height', `${diameter}px`)
    this.renderer.setStyle(bubble, 'width', `${diameter}px`)
    return bubble
  }
  
  public verifyBubbles = () => {
    setInterval(() => {
      for(let bubble of this.bubbles){
        if(bubble.offsetTop < -500){
          bubble.remove()
        }
      }
    }, 10000)
  }
}

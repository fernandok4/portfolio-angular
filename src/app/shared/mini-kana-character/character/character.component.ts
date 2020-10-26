import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {

  @ViewChild('canvas', {static: true}) canvas: ElementRef<HTMLCanvasElement>
  private context: CanvasRenderingContext2D
  private character: Character

  constructor() { }

  ngOnInit() {
    this.initCanvas()
    this.getCanvasContext()
    this.createCharacter()
    this.redrawCanvas()
  }

  initCanvas = () => {
    this.canvas.nativeElement.width = document.documentElement.clientWidth
    this.canvas.nativeElement.height = document.documentElement.clientHeight
  }

  redrawCanvas = () => {
    this.initCanvas()
    this.character.redraw()
  }

  updateCanvas = () => {
    this.character.redraw()
  }

  private getCanvasContext = () => {
    this.context = this.canvas.nativeElement.getContext('2d')
  }

  private createCharacter = () => {
    this.character = new Character(this.context, 80, this.canvas.nativeElement.height - 150, 100, 100)
  } 

  move = (pixels: number) => {
    this.character.movePixels(pixels)
  }
}

class Character {

  private speed = 2

  constructor(private context: CanvasRenderingContext2D, private x: number, private y: number, private width: number, private height: number){
    this.context.fillRect(this.x, this.y, this.width, this.height)
  }

  redraw = () => {
    this.context.fillRect(this.x, this.y, this.width, this.height)
  }

  movePixels = (pixels: number) => {
    this.context.clearRect(this.x, this.y, this.width, this.height)
    let directionFactor = pixels > 0 ? 1 : -1
    this.x += this.speed * directionFactor
    this.redraw()
    if(Number(pixels.toFixed(0)) != 0){
      window.requestAnimationFrame(_ => this.movePixels(pixels + (this.speed * -directionFactor)))
    }
  }
}
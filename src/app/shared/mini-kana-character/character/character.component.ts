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
    this.character.updatePositionAndRedraw()
  }

  updateCanvas = () => {
    this.character.redraw()
  }

  private getCanvasContext = () => {
    this.context = this.canvas.nativeElement.getContext('2d')
  }

  private createCharacter = () => {
    this.character = new Character(this.context, -150, this.canvas.nativeElement.height - 250, 100, 200)
  } 

  move = (pixels: number) => {
    this.character.movePixels(pixels)
  }
}

class Character {

  private speed = 3
  private windowHeight = 0
  private windowWidth = 0

  constructor(private context: CanvasRenderingContext2D, private x: number, private y: number, private width: number, private height: number){
    this.windowHeight = window.innerHeight
    this.windowWidth = window.innerWidth
    this.context.fillRect(this.x, this.y, this.width, this.height)
  }

  redraw = () => {
    this.context.fillRect(this.x, this.y, this.width, this.height)
  }

  updatePositionAndRedraw = () => {
    this.x = (this.x * window.innerWidth) / this.windowWidth
    this.y = (this.y * window.innerHeight) / this.windowHeight
    this.windowHeight = window.innerHeight
    this.windowWidth = window.innerWidth
    this.redraw()
  }

  movePixels = (pixels: number) => {
    this.context.clearRect(this.x, this.y, this.width, this.height)
    let directionFactor = pixels > 0 ? 1 : -1
    let necessaryMove = Math.min(Math.abs(this.speed), Math.abs(pixels))
    this.x += necessaryMove * directionFactor
    this.redraw()
    if(Number(pixels.toFixed(0)) != 0){
      window.requestAnimationFrame(_ => this.movePixels(pixels + (necessaryMove * -directionFactor)))
    }
  }
}
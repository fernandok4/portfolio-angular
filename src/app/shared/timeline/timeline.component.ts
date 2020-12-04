import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, Input, OnInit, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
  animations: [
    trigger('eventState', [
      state('active', style({
        backgroundColor: '#e9e9e9'
      })),
      state('disable', style({
        backgroundColor: '#212121'
      })),
      transition('active => disable', [
        animate('1s')
      ]),
      transition('disable => active', [
        animate('1s')
      ]),
    ]),
    trigger('eventDescriptionState', [
      state('active', style({
        opacity: 1
      })),
      state('disable', style({
        opacity: 0
      })),
      transition('active => disable', [
        animate('1s')
      ]),
      transition('disable => active', [
        animate('1s')
      ]),
    ]),
  ]
})
export class TimelineComponent implements OnInit {

  @Input("options") options: TimelineOptions
  @ViewChildren("eventsDiv") eventsDiv: QueryList<ElementRef>
  public selectedEventIndex = 0
  public selectedDescriptionEventIndex = 0
  public line: Array<any> = []
  public eventStateChanged = false
  public animationDescriptionOptions = {}

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.selectedEventIndex = 0;
      this.getLineWidthSize();
    }, 10)
  }

  private getLineWidthSize = () => {
    if(this.options.events.length <= 1) return
    let eventsDivArray = this.eventsDiv.toArray()
    this.line = []
    for(let eventIndex in eventsDivArray){
      if(Number(eventIndex) == eventsDivArray.length - 1) continue
      let widthLine = eventsDivArray[1].nativeElement.offsetLeft - eventsDivArray[0].nativeElement.offsetLeft
      let heightLine = this.options.lineOptions.height
      let heightEvent = eventsDivArray[eventIndex].nativeElement.offsetHeight
      let widthEvent = eventsDivArray[eventIndex].nativeElement.offsetHeight
      let line = {
        ...this.options.lineOptions,
        width: widthLine + "px",
        height: heightLine + "px",
        left: (Number(eventIndex) * widthLine) + (widthEvent / 2) + "px",
        top: (heightEvent - (heightLine / 2)) / 2 + "px",
      }
      this.line.push(line)
    }
  }

  public changeEventDescription = (eventIndex) => {
    if(eventIndex == this.selectedEventIndex) return
    this.eventStateChanged = true
    this.selectedEventIndex = eventIndex
    setTimeout(_ => {
      this.eventStateChanged = false
      this.selectedDescriptionEventIndex = this.selectedEventIndex
    }, Number((this.options.animationOptions.animationDuration || '1s').replace('s', '')) * 1000)
  }

  public onWindowResize = () => {
    this.getLineWidthSize()
  }
}

export class TimelineOptions{
  public events?: Array<TimelineEvents> = [] 
  public lineOptions?: any = undefined 
  public animationOptions?: any = {} 
  public titleOptions?: any = {} 
  public descriptionOptions?: any = {}
}

export class TimelineEvents{

  constructor(public date: string, public name: string, public description: string){
    this.date = date
    this.name = name
    this.description = description
  }
}

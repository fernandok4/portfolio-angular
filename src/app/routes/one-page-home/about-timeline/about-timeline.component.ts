import { Component, OnInit, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { AboutTimelineHelper } from './about-timeline-helper';

@Component({
  selector: 'app-about-timeline-beauty',
  templateUrl: './about-timeline.component.html',
  styleUrls: ['./about-timeline.component.scss']
})
export class AboutTimelineBeautyComponent implements OnInit {

  constructor(private renderer2: Renderer2, private timelineHelper: AboutTimelineHelper) { }

  @ViewChildren("event") private events;
  @ViewChild("timeline") private timeline;
  private svgs: Array<any> = []
  public eventsTimeline: Array<any> = this.timelineHelper.getTimelineOptions()
  public selectedEvent = this.eventsTimeline[0]

  ngOnInit() {
    setTimeout(() => {
      this.processEventsToCreateConnection()
    }, 10)
  }

  processEventsToCreateConnection = (endIndex = 0) => {
    this.cleanElements()
    let events = this.events.toArray()
    this.svgs = []
    for (let index = 0; index < events.length; index++) {
      if(index == events.length - 1){
        break;
      }
      const event = events[index];
      const nextEvent = events[index + 1];
      this.createConnection(event, nextEvent, endIndex)
    }
  }

  createConnection = (el1, el2, endIndex) => {
    if(window.innerWidth < 640){
      return
    }
    // Calcula o centro x e y do elemento para ser os pontos da reta de conexão
    let x1 = el1.nativeElement.offsetLeft + (el1.nativeElement.offsetWidth / 2)
    let y1 = el1.nativeElement.offsetTop + (el1.nativeElement.offsetHeight / 2)
    let x2 = el2.nativeElement.offsetLeft + (el2.nativeElement.offsetWidth / 2)
    let y2 = el2.nativeElement.offsetTop + (el2.nativeElement.offsetHeight / 2)
    let svg = this.renderer2.createElement("svg", "svg")
    let line = this.renderer2.createElement("line", "svg")
    this.renderer2.setAttribute(line, "x1", x1.toString())
    this.renderer2.setAttribute(line, "y1", y1.toString())
    this.renderer2.setAttribute(line, "x2", x2.toString())
    this.renderer2.setAttribute(line, "y2", y2.toString())
    this.renderer2.setAttribute(line, "class", "stroke-line")
    // endIndex - 1 pois nunca vou pintar a linha posterior somente as anteriores ao eventos selecionados
    if(endIndex - 1 >= this.svgs.length){
      this.renderer2.setAttribute(line, "class", "stroke-line active")
    }
    this.renderer2.appendChild(svg, line)
    this.renderer2.appendChild(this.timeline.nativeElement, svg)
    this.svgs.push(svg);
  }

  cleanElements = () => {
    this.svgs.forEach(element => {
      this.renderer2.removeChild(this.timeline, element)
    });
  }

  onResize = () => {
    this.processEventsToCreateConnection()
  }

  selectEvent = (eventTimeline) => {
    let findedIndex = this.eventsTimeline.findIndex(item => item == eventTimeline)
    this.paintSelectedEvents(findedIndex)
    this.processEventsToCreateConnection(findedIndex)
    this.selectedEvent = eventTimeline
  }

  paintSelectedEvents = (numberOfEvents) => {
    for(let event in this.eventsTimeline){
      this.eventsTimeline[event].active = Number(event) <= numberOfEvents
    }
  }
}

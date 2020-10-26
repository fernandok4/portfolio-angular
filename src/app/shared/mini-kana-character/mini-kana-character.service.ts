import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MiniKanaCharacterService {

  characterActionSubscribe: Subject<any> = new Subject()

  constructor() { }

  public move = (side: 'left' | 'right', steps: string) => {
    this.characterActionSubscribe.next({
      type: "MOVE",
      side,
      steps
    })
  }
}
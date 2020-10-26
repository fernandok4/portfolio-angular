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

  constructor(private miniKanaCharacterService: MiniKanaCharacterService) { }

  ngOnInit() {
    this.miniKanaCharacterService.move("right", '30vw')
  }

}

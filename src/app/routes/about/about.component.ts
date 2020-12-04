import { Component, OnInit } from '@angular/core';
import { fader } from 'src/app/route-animation';
import { MiniKanaCharacterService } from 'src/app/shared/mini-kana-character/mini-kana-character.service';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [
    fader
  ]
})
export class AboutComponent implements OnInit {

  public slidePage = 0
  public faAngleLeft = faAngleLeft
  public faAngleRight = faAngleRight

  constructor(private miniKanaCharacterService: MiniKanaCharacterService) { }

  ngOnInit() {
    setTimeout(() => {
      this.miniKanaCharacterService.move("right", '15vw')
    }, 500)
  }

  public previousPage = () => {
    this.changePage(this.slidePage <= 0 ? 2 : this.slidePage - 1)
  }
  
  public nextPage = () => {
    this.changePage(this.slidePage >= 2 ? 0 : this.slidePage + 1)
  }

  public changePage = (page: number) => {
    this.slidePage = page
  }
}
import { Component, OnInit } from '@angular/core';
import { fader } from 'src/app/route-animation';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [
    fader
  ]
})
export class ContactComponent implements OnInit {

  emailTypeList = [{
    value: "question",
    label: "Dúvidas"
  },
  {
    value: "services",
    label: "Serviços"
  },
  {
    value: "job",
    label: "Interesse de Contratação"
  },
  {
    value: "others",
    label: "Outros"
  }]
  faGithubSquare = faGithubSquare
  faLinkedin = faLinkedin

  constructor() { }

  ngOnInit() {
  }

}

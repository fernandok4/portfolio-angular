import { Component, OnInit, ElementRef, ViewChild, HostListener } from '@angular/core';
import { faBars, faHome, faBlog, faPhone, faUser, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { Router, NavigationEnd } from '@angular/router';
// <i class="fas fa-user"></i>
@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.scss']
})
export class HomeHeaderComponent implements OnInit {

  faBars: IconDefinition = faBars
  menuItems: Array<MenuItems> = [
    {
      name: 'Início',
      icon: faHome,
      id: 'home',
      route: '/home'
    },
    {
      name: 'Sobre',
      icon: faUser,
      id: 'about',
      route: '/about'
    },
    {
      name: 'Blog',
      icon: faBlog,
      id: 'blog',
      route: '/blog'
    },
    {
      name: 'Contato',
      icon: faPhone,
      id: 'contact',
      route: '/contact'
    },
  ]
  selectedMenuItem: MenuItems

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe(this.onRouteChange)
  }

  onRouteChange = (event) => {
    if(event instanceof NavigationEnd){
      let newUrlAfterRedirect = this.menuItems.find(item => item.route == event.urlAfterRedirects)
      if(!newUrlAfterRedirect){
        return
      }
      if(this.selectedMenuItem){
        this.selectedMenuItem.active = false
      }
      const actual = newUrlAfterRedirect
      actual.active = true
      this.selectedMenuItem = actual
    }
  }

}

export class MenuItems{
  icon: IconDefinition = undefined;
  name: String = '';
  id: String = '';
  route: String = '';
  active?: Boolean = false;

  constructor(icon, name, id, route){
    this.icon = icon
    this.name = name
    this.id = id
    this.route = route
  }

  
}

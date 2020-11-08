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
      tooltip: 'Home',
      icon: faHome,
      id: 'home',
      route: '/home'
    },
    {
      tooltip: 'Habilidades',
      icon: faUser,
      id: 'about',
      route: '/about'
    },
    {
      tooltip: 'Blog',
      icon: faBlog,
      id: 'blog',
      route: '/home'
    },
    {
      tooltip: 'Contato',
      icon: faPhone,
      id: 'contact',
      route: '/contact'
    },
  ]
  selectedMenuItem: MenuItems
  @ViewChild('itemsMenu') itemsMenu: ElementRef
  @ViewChild('allMenu') allMenu: ElementRef

  openMenu = () => {
    this.itemsMenu.nativeElement.style.display = this.itemsMenu.nativeElement.style.display == 'block' ? 'none' : 'block'
  }

  @HostListener('document:click', ['$event'])
  closeMenu = (event) => {
    // If click is outside from menu close menu items
    if(!this.allMenu.nativeElement.contains(event.target)) {
      this.itemsMenu.nativeElement.style.display = 'none'
    }
  }

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe(this.onRouteChange)
  }

  onRouteChange = (event) => {
    if(event instanceof NavigationEnd){
      if(this.selectedMenuItem){
        this.selectedMenuItem.active = false
      }
      const actual = this.menuItems.find((item) => item.route == event.urlAfterRedirects)
      actual.active = true
      this.selectedMenuItem = actual
      this.itemsMenu.nativeElement.style.display = 'none'
    }
  }

}

export class MenuItems{
  icon: IconDefinition = undefined;
  tooltip: String = '';
  id: String = '';
  route: String = '';
  active?: Boolean = false;

  constructor(icon, tooltip, id, route){
    this.icon = icon
    this.tooltip = tooltip
    this.id = id
    this.route = route
  }

  
}

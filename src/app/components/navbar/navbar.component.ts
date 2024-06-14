import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  container: string = "navbar-container";
  content: string = "navbar-content";
  nav: string = "navbar-nav-item"
  icon: string = "navbar-nav-item-icon"

  contentActive: string = "navbar-content-active"
  iconActive: string = "navbar-icon-active"
  navbarButtonsActive: string = "navbar-buttons-container"
  menuActive: string = "navbar-menu-active"

  optionsNavbar: {
    content: string,
    pathUrl?: string
  }[] = [
    {
      content: "apple.svg",
    },
    {
      content: "Loja",
      pathUrl: "/store"
    },
    {
      content: "Mac",
      pathUrl: "/mac"
    },
    {
      content: "iPad",
      pathUrl: "/ipad"
    },
    {
      content: "iPhone",
      pathUrl: "/iphone"
    },
    {
      content: "Watch",
      pathUrl: "/watch"
    },
    {
      content: "AirPods",
      pathUrl: "/airpods"
    },
    {
      content: "TV e Casa",
      pathUrl: "/tv-home"
    },
    {
      content: "Entretenimento",
      pathUrl: "/services"
    },
    {
      content: "Acessórios",
      pathUrl: "/shop/acessories/all"
    },
    {
      content: "Suporte",
      pathUrl: "/support.apple.com/pt-br"
    },
    {
      content: "search.svg"
    },
    {
      content: "store.svg"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

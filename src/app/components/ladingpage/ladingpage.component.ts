import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ladingpage',
  templateUrl: './ladingpage.component.html',
  styleUrls: ['./ladingpage.component.css']
})
export class LadingpageComponent implements OnInit {

  container: string = "ladingpage-container"
  content: string = "ladingpage-content"
  contentGrid: string = "ladingpage-content-grid"

  cardBackground: string = "ladingpage-card-item-background"
  backgroundContentGrid: string = "ladingpage-card-item-background-grid"

  cardItem: string = "ladingpage-card-item"
  cardItemGrid: string = "ladingpage-card-item-grid"

  cardItemReverse: string = "ladingpage-card-item-reverse"
  cardTitleImg: string = "ladingpage-card-item-title-img"
  cardTitle: string = "ladingpage-card-item-title"
  cardText: string = "ladingpage-card-item-text"
  cardButton: string = "ladingpage-card-item-button"
  cardButtonPay: string = "ladingpage-card-item-button-pay"

  mainCards: { img: string, title: string, text: string, pathUrl: string }[] = [
    {
      img: '../../../assets/ladingpage-imgs/ladingpage1-1.jpg',
      title: '../../../assets/ladingpage-titles/ladingpage1.png',
      text: 'Conferência Mundial de Desenvolvedores da Apple. Participe online de 10 a 14 de junho.',
      pathUrl: '/apple-events'
    },
    {
      img: '../../../assets/ladingpage-imgs/ladingpage2-1.jpg',
      title: 'iPhone 15 Pro',
      text: 'Titânio. Muito robusto. Muito leve. Muito Pro.',
      pathUrl: '/iphone-15-pro'
    },
    {
      img: '../../../assets/ladingpage-imgs/ladingpage3-1.jpg',
      title: 'iPad Pro',
      text: 'Inacreditavelmente fino. Incrivelmente poderoso.',
      pathUrl: '/ipad-pro'
    }
  ]

  secondaryCards: { id: number, img: string, title: string, text: string, pathUrl: string }[] = [
    {
      id: 1,
      img: '../../../assets/ladingpage-imgs/ladingpage-cards-4.jpg',
      title: 'iPhone 15',
      text: 'A câmera é uau. O design é uau. É todo uau.',
      pathUrl: '/iphone15'
    },
    {
      id: 2,
      img: '../../../assets/ladingpage-imgs/ladingpage-cards-5.jpg',
      title: '../../../assets/ladingpage-titles/ladingpage5.png',
      text: 'Brilha mais em tudo.',
      pathUrl: '/watch'
    },
    {
      id: 3,
      img: '../../../assets/ladingpage-imgs/ladingpage-cards-6.jpg',
      title: 'MacBook Air',
      text: 'Superfino. Superleve. Superchip M3',
      pathUrl: '/macbook-air'
    },
    {
      id: 4,
      img: '../../../assets/ladingpage-imgs/ladingpage-cards-7.jpg',
      title: '../../../assets/ladingpage-titles/ladingpage7.png',
      text: 'Dois tamanhos. Chip mais rápido. Pronto para tudo.',
      pathUrl: '/ipad-air'
    },
    {
      id: 5,
      img: '../../../assets/ladingpage-imgs/ladingpage-cards-8.jpg',
      title: '../../../assets/ladingpage-titles/ladingpage8.png',
      text: 'Sua próxima aventura',
      pathUrl: '/macbook-air'
    },
    {
      id: 6,
      img: '../../../assets/ladingpage-imgs/ladingpage-cards-9.jpg',
      title: 'AirPods Pro',
      text: 'Áudio Adaptativo. Ouça a diferença.',
      pathUrl: '/airpods-pro'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

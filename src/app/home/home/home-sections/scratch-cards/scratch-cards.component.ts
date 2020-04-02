import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-scratch-cards',
  templateUrl: './scratch-cards.component.html',
  styleUrls: ['./scratch-cards.component.scss']
})
export class ScratchCardsComponent implements OnInit {
  @Input() sys: boolean;
  scratchs: any[] = [
    {
      id: 2,
      new: true,
      popular: false,
      win: '10.000.00',
      url: '#'
    },
    {
      id: 3,
      new: true,
      popular: false,
      win: '2.000.00',
      url: '#'
    },
    {
      id: 35,
      new: false,
      popular: false,
      win: '15.000.00',
      url: '#'
    },
    {
      id: 22,
      new: false,
      popular: true,
      win: '10.000.00',
      url: '#'
    },
    {
      id: 56,
      new: false,
      popular: true,
      win: '10.000.00',
      url: '#'
    }
  ];
  games: any[] = [
    {
      id: 58,
      url: '#'
    },
    {
      id: 35,
      url: '#'
    },
    {
      id: 55,
      url: '#'
    },
    {
      id: 44,
      url: '#'
    },
    {
      id: 3,
      url: '#'
    },
    {
      id: 22,
      url: '#'
    }
  ];
  ltkGames: any[] = [
    {
      img: './assets/images/scratch-cards/ltk/58.jpg',
      id: 58,
      url: '#'
    },
    {
      img: './assets/images/scratch-cards/ltk/35.jpg',
      id: 35,
      url: '#'
    },
    {
      img: './assets/images/scratch-cards/ltk/55.jpg',
      id: 55,
      url: '#'
    },
    {
      img: './assets/images/scratch-cards/ltk/44.jpg',
      id: 44,
      url: '#'
    },
    {
      img: './assets/images/scratch-cards/ltk/3.jpg',
      id: 3,
      url: '#'
    },
    {
      img: './assets/images/scratch-cards/ltk/22.jpg',
      id: 22,
      url: '#'
    }
  ];

  constructor() {}

  ngOnInit() {}
}

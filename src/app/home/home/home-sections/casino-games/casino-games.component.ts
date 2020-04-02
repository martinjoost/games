import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-casino-games',
  templateUrl: './casino-games.component.html',
  styleUrls: ['./casino-games.component.scss']
})
export class CasinoGamesComponent implements OnInit {
  @Input() sys: boolean;
  hot: any[] = [
    {
      id: 93,
      new: true,
      popular: false,
      url: '#'
    },
    {
      id: 94,
      new: true,
      popular: false,
      url: '#'
    },
    {
      id: 99,
      new: false,
      popular: false,
      url: '#'
    },
    {
      id: 103,
      new: false,
      popular: true,
      url: '#'
    }
  ];
  slots: any[] = [
    {
      id: 51,
      new: false,
      popular: true,
      url: '#'
    },
    {
      id: 50,
      new: true,
      popular: false,
      url: '#'
    },
    {
      id: 46,
      new: false,
      popular: false,
      url: '#'
    },
    {
      id: 52,
      new: false,
      popular: false,
      url: '#'
    },
    {
      id: 53,
      new: false,
      popular: false,
      url: '#'
    },
    {
      id: 55,
      new: false,
      popular: false,
      url: '#'
    }
  ];
  cards: any[] = [
    {
      id: 34,
      new: false,
      popular: true,
      url: '#'
    },
    {
      id: 36,
      new: false,
      popular: false,
      url: '#'
    },
    {
      id: 38,
      new: false,
      popular: false,
      url: '#'
    },
    {
      id: 41,
      new: false,
      popular: false,
      url: '#'
    },
    {
      id: 42,
      new: false,
      popular: false,
      url: '#'
    }
  ];
  table: any[] = [
    {
      id: 35,
      new: false,
      popular: false,
      url: '#'
    },
    {
      id: 37,
      new: false,
      popular: true,
      url: '#'
    },
    {
      id: 70,
      new: false,
      popular: false,
      url: '#'
    },
    {
      id: 72,
      new: true,
      popular: false,
      url: '#'
    }
  ];
  ltkGames: any[] = [
    {
      id: 51,
      url: '#'
    },
    {
      id: 50,
      url: '#'
    },
    {
      id: 46,
      url: '#'
    },
    {
      id: 52,
      url: '#'
    },
    {
      id: 53,
      url: '#'
    },
    {
      id: 55,
      url: '#'
    }
  ];
  constructor() {}
  showGame: boolean = false;
  ngOnInit() {}

  playGame() {
    this.showGame = !this.showGame;
  }
}

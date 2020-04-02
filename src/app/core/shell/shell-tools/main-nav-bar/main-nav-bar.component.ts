import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-nav-bar',
  templateUrl: './main-nav-bar.component.html',
  styleUrls: ['./main-nav-bar.component.scss']
})
export class MainNavBarComponent implements OnInit {
  isShow: number = 0;
  listArr: any = [];
  lotteries: any[] = [
    {
      id: 2,
      name: 'Mega Millions',
      country: 'usa',
      jackpot: '314',
      currency: 'dolar',
      date: '2019-12-10 22:00:00',
      type: 'lotto'
    },
    {
      id: 3,
      name: 'Powerball',
      country: 'usa',
      jackpot: '140',
      currency: 'dolar',
      day: 'Wed',
      date: '2019-12-11 21:59:00',
      type: 'lotto'
    },
    {
      id: 18,
      name: 'SuperEnalotto',
      country: 'italy',
      jackpot: '43.7',
      currency: 'euro',
      date: '2019-12-10 11:00:00',
      type: 'lotto'
    },
    {
      id: 8,
      name: 'EuroMillions',
      country: 'europe',
      jackpot: '25',
      currency: 'euro',
      date: '2019-12-10 12:30:00',
      type: 'lotto'
    }
  ];
  syndicates: any[] = [
    {
      id: 116,
      name: 'PowerCombo',
      country: 'usa - italy',
      jackpot: '512',
      currency: 'dolar',
      date: '2019-12-10 11:00:00',
      type: 'syndicate'
    },
    {
      id: 148,
      name: 'Monster Combo',
      country: 'usa',
      jackpot: '498',
      currency: 'dolar',
      day: 'Wed',
      date: '2019-12-10 12:30:00',
      type: 'syndicate'
    },
    {
      id: 143,
      name: 'World Combo',
      country: 'usa',
      jackpot: '381',
      currency: 'dolar',
      date: '2019-12-10 01:30:00',
      type: 'syndicate'
    },
    {
      id: 2,
      name: 'Mega Millions',
      country: 'usa',
      jackpot: '314',
      currency: 'dolar',
      date: '2019-12-10 22:00:00',
      type: 'syndicate'
    }
  ];
  raffles: any[] = [
    {
      id: 5,
      name: 'El Gordo de Navidad',
      xinfo: 'Lotería Nacional de España',
      country: 'spain',
      jackpot: '2380',
      currency: 'euro',
      date: '2019-12-10 11:00:00',
      type: 'raffle'
    },
    {
      id: 8,
      name: 'El Niño',
      xinfo: 'Lotería Nacional de España',
      country: 'spain',
      jackpot: '700',
      currency: 'euro',
      date: '2019-12-10 11:00:00',
      type: 'raffle'
    },
    {
      id: 3,
      name: 'Sorteo Especial de Enero',
      xinfo: 'Lotería Nacional de España',
      country: 'spain',
      jackpot: '2380',
      currency: 'euro',
      date: '2019-12-10 11:00:00',
      type: 'raffle'
    },
    {
      id: 1,
      name: 'Sorteo del Sábado',
      xinfo: 'Lotería Nacional de España',
      country: 'spain',
      jackpot: '21',
      currency: 'euro',
      date: '2019-12-10 11:00:00',
      type: 'raffle'
    }
  ];
  constructor() {}

  ngOnInit() {}

  fnIsShow(n: number) {
    this.isShow = n;
  }

  get arr() {
    if (this.isShow === 1) {
      return this.lotteries;
    } else if (this.isShow === 2) {
      return this.syndicates;
    } else {
      return this.raffles;
    }
  }
}

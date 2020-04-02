import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home-lotto-slider',
  templateUrl: './home-lotto-slider.component.html',
  styleUrls: ['./home-lotto-slider.component.scss']
})
export class HomeLottoSliderComponent implements OnInit {
  @Input() sys: boolean;
  lottos: any[] = [
    {
      id: '3',
      name: 'Powerball',
      jackpot: '100',
      month: 'nov',
      year: '2019',
      day: 'Wed',
      daynum: '27',
      time: '13:00',
      country: 'Usa',
      currency: 'dolar',
      url: '#'
    },
    {
      id: '2',
      name: 'Megamillions',
      jackpot: '226',
      month: 'nov',
      year: '2019',
      day: 'Thu',
      daynum: '26',
      time: '13:00',
      country: 'Usa',
      currency: 'dolar',
      url: '#'
    },
    {
      id: '11',
      name: 'Mega Sena',
      jackpot: '37.5',
      month: 'nov',
      year: '2019',
      day: 'thu',
      daynum: '26',
      time: '13:00',
      country: 'Brazil',
      currency: 'reales',
      url: '#'
    },
    {
      id: '8',
      name: 'Euro Millions',
      jackpot: '25',
      month: 'nov',
      year: '2019',
      day: 'thu',
      daynum: '26',
      time: '13:00',
      country: 'Europe',
      currency: 'euro',
      url: '#'
    }
  ];
  constructor() {}

  ngOnInit() {}
}

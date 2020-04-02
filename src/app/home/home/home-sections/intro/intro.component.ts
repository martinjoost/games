import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {
  @Input() sys: boolean;
  items:any = [
    {
			"id": "3",
			"name": "Powerball",
			"jackpot": "100",
			"month": "nov",
			"year": "2019",
			"day": "Wed",
			"daynum": "27",
			"time": "13:00",
			"country": "Usa",
			"currency": "$",
			"url": "/home",
			"text": "feel the world in your hands",
			"smallicon": "./assets/images/lotto-logos/wt/3.png",
			"backgroundimage": "./assets/images/banner-home/wt/3.jpg"
		},
		{
			"id": "2",
			"name": "Megamillions",
			"jackpot": "226",
			"month": "nov",
			"year": "2019",
			"day": "Thu",
			"daynum": "26",
			"time": "13:00",
			"country": "Usa",
			"currency": "$",
			"url": "/not-found",
			"text": "Don't miss your chance to win!",
			"smallicon": "./assets/images/lotto-logos/wt/2.png",
			"backgroundimage": "./assets/images/banner-home/wt/2.jpg"
		},
		{
			"id": "5",
			"name": "Lotto",
			"jackpot": "226",
			"month": "nov",
			"year": "2019",
			"day": "Thu",
			"daynum": "26",
			"time": "13:00",
			"country": "Usa",
			"currency": "$",
			"url": "/test",
			"text": "Slider 4",
			"smallicon": "./assets/images/lotto-logos/wt/5.png",
			"backgroundimage": "./assets/images/banner-home/wt/4.jpg"
		},
		{
			"id": "4",
			"name": "Polla",
			"jackpot": "500",
			"month": "nov",
			"year": "2019",
			"day": "Thu",
			"daynum": "26",
			"time": "13:00",
			"country": "Spain",
			"currency": "€",
			"url": "https://www.trillonario.com/mailing/slider/en-us/2017-03-01_HomeBanner_MM_EN-NU.jpg",
			"text": "Play the best game",
			"smallicon": "https://www.wintrillions.com/images_v3/safe.png",
			"backgroundimage": "https://www.trillonario.com/mailing/slider/en-us/2017-03-01_HomeBanner_MM_EN-NU.jpg"
		}
  ]
  constructor() {}

  ngOnInit() {}
}

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-home-intro-slider',
  templateUrl: './home-intro-slider.component.html',
  styleUrls: ['./home-intro-slider.component.scss']
})
export class HomeIntroSliderComponent implements OnInit {
  homeIntro: any = {
    pagination: { el: '.swiper-pagination', clickable: true },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    slidesPerView: 1,
    spaceBetween: 0,
    direction: 'horizontal',
    loop: false,
    effect: 'fade',
    speed: 1500,
    autoplay: {
      delay: 5500,
      disableOnInteraction: false
    }
  };
  constructor() {}

  ngOnInit() {}
}

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-lotto-slider',
  templateUrl: './lotto-slider.component.html',
  styleUrls: ['./lotto-slider.component.scss']
})
export class LottoSliderComponent implements OnInit {
  lottoSlider: any = {
    pagination: { el: '.swiper-pagination', clickable: true },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    direction: 'horizontal',
    loop: true,
    breakpoints: {
      480: {
        slidesPerView: 2,
        spaceBetween: 5
      },
      680: {
        slidesPerView: 2,
        spaceBetween: 5
      },
      780: {
        slidesPerView: 3,
        spaceBetween: 5
      },
      980: {
        slidesPerView: 3,
        spaceBetween: 5
      },
      1180: {
        slidesPerView: 4,
        spaceBetween: 5
      }
    }
  };

  constructor() {}

  ngOnInit() {}
}

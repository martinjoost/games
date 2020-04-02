import { Component, OnInit, ViewChild } from '@angular/core';
import { SwiperComponent } from 'ngx-useful-swiper';
import { SwiperOptions } from 'swiper';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-special-lotto-slider',
  templateUrl: './special-lotto-slider.component.html',
  styleUrls: ['./special-lotto-slider.component.scss']
})
export class SpecialLottoSliderComponent implements OnInit {
  @ViewChild('usefulSwiper') usefulSwiper: SwiperComponent;
  translate = true;
  standard: SwiperOptions = {
    pagination: { el: '.swiper-pagination', clickable: true },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    on: {
      slideChange: () => {
        if (this.translate) {
          // this code section is used to solved the problem to display word with translate when exists loop
          this.usefulSwiper.swiper.removeSlide(this.usefulSwiper.swiper.slides.length);
          this.usefulSwiper.swiper.update();
          this.translate = false;
        }
      }
    },
    loop: true,
    direction: 'horizontal',
    effect: 'coverflow',
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true
    },
    breakpoints: {
      380: {
        slidesPerView: 1,
        spaceBetween: 5
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 5
      },

      680: {
        slidesPerView: 2,
        spaceBetween: 5
      },
      1080: {
        slidesPerView: 3,
        spaceBetween: 5
      }
    }
  };

  constructor() {}

  ngOnInit() {}
}

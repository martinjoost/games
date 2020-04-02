import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';
import { SwiperComponent } from 'ngx-useful-swiper';

@Component({
  selector: 'app-standard-slider',
  templateUrl: './standard-slider.component.html',
  styleUrls: ['./standard-slider.component.scss']
})
export class StandardSliderComponent implements OnInit {
  @ViewChild('usefulSwiper') usefulSwiper: SwiperComponent;
  translate = true;
  standard: any = {
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
    slidesPerView: 4,
    spaceBetween: 5,
    direction: 'horizontal',
    loop: true,
    breakpoints: {
      320: {
        slidesPerView: 3,
        spaceBetween: 5
      },
      680: {
        slidesPerView: 4,
        spaceBetween: 5
      }
    }
  };
  constructor() {}

  ngOnInit() {}
}

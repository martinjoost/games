import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss'],
  animations: [
    trigger('isOpenNav', [
      transition(':enter', [
        style({
          transform: 'scaleY(0)',
          opacity: 0
        }),
        animate(
          '.35s ease-in',
          style({
            transform: 'scaleY(1)',
            opacity: 1
          })
        )
      ]),
      transition(':leave', [
        style({
          transform: 'scaleY(1)',
          opacity: 1
        }),
        animate(
          '.35s .45s ease-out',
          style({
            transform: 'scaleY(0)',
            opacity: 0
          })
        )
      ])
    ]),
    trigger('isOpenNav2', [
      transition(':enter', [
        style({
          transform: 'scaleX(0)',
          opacity: 0
        }),
        animate(
          '.35s ease-in',
          style({
            transform: 'scaleX(1)',
            opacity: 1
          })
        )
      ]),
      transition(':leave', [
        style({
          transform: 'scaleX(1)',
          opacity: 1
        }),
        animate(
          '.35s .45s ease-out',
          style({
            transform: 'scaleX(0)',
            opacity: 0
          })
        )
      ])
    ])
  ]
})
export class MainNavComponent implements OnInit {
  @Input() sys: boolean;
  @Input() theme: number;
  isOpen: boolean = false;
  system: string;
  constructor() {}

  ngOnInit() {}

  get setTheme() {
    return this.theme === 1 ? true : false;
  }

  isOpenMenu() {
    this.isOpen = !this.isOpen;
  }
}

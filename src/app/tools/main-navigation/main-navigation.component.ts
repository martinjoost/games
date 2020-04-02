import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { SystemService } from '../../services/system/system.service';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-main-navigation',
  templateUrl: './main-navigation.component.html',
  styleUrls: ['./main-navigation.component.scss'],
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
export class MainNavigationComponent implements OnInit {
  @Input() wt: boolean = false;
  @Input() theme: number;
  isOpen: boolean = false;
  system: string;
  subsSystem: any;
  constructor(protected gsys: SystemService) {
    this.setSystem();
  }

  ngAfterViewInit() {}

  ngOnInit() {}

  setSystem() {
    this.subsSystem = this.system = this.gsys.getSystem(this.wt);
  }

  get setTheme() {
    return this.theme === 1 ? true : false;
  }

  isOpenMenu() {
    this.isOpen = !this.isOpen;
  }

  ngOnDestroy() {
    // this.subsSystem.unsubscribe();
  }
}

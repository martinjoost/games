import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-simple-modal',
  templateUrl: './simple-modal.component.html',
  styleUrls: ['./simple-modal.component.scss'],
  animations: [
    trigger('isOpenShow', [
      transition(':enter', [
        style({
          transform: 'scaleY(0)',
          opacity: 0
        }),
        animate(
          '.35s .45s ease-in',
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
    trigger('isFade', [
      transition(':enter', [
        style({
          opacity: 0
        }),
        animate(
          '.35s ease-in',
          style({
            opacity: 1
          })
        )
      ]),
      transition(':leave', [
        style({
          opacity: 1
        }),
        animate(
          '.35s ease-out',
          style({
            opacity: 0
          })
        )
      ])
    ])
  ]
})
export class SimpleModalComponent implements OnInit {
  @Input() fullHeight: boolean = true;
  @Input() modalTitle: string;
  @Input() closeBtnText: string = 'Close';
  modalShow: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  get setModal() {
    return this.fullHeight ? 'vh-100 simple-modal-content-set txt-center' : 'vh-50 simple-modal-custom-set';
  }

  closeSModal(): void {
    this.modalShow = false;
  }
}

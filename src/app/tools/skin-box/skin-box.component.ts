import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { chainedInstruction } from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-skin-box',
  templateUrl: './skin-box.component.html',
  styleUrls: ['./skin-box.component.scss']
})
export class SkinBoxComponent implements OnInit {
  @Input() video: boolean = false;
  @Input() bgImg: boolean = true;
  @Input() title: string;
  @Input() theme: string = 'a';
  @Input() textAnim: boolean = true;
  @Input() palette: string;

  hallowen: any[] = [
    {
      css: 'hwn.css',
      title: 'Hallowen',
      promo: 'Lorem impsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun',
      action: '#',
      button: 'Play Now!',
      img: '',
      video: '',
      textAnim: true,
      theme: 'a'
    }
  ];

  constructor() {}

  ngOnInit(): void {}
}

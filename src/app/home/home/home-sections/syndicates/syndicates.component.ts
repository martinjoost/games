import { Component, OnInit, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { WindowScrollService } from '../../../../services/window-scroll/window-scroll.service';

@Component({
  selector: 'app-syndicates',
  templateUrl: './syndicates.component.html',
  styleUrls: ['./syndicates.component.scss']
})
export class SyndicatesComponent implements OnInit {
  @ViewChild('user1', { static: false })
  user1: ElementRef;
  @ViewChild('user2', { static: false })
  user2: ElementRef;
  @ViewChild('user3', { static: false })
  user3: ElementRef;
  @ViewChild('user4', { static: false })
  user4: ElementRef;
  subsWindowScroll: any;
  scroll: number = 0;
  u1: number;
  u2: number;
  u3: number;
  u4: number;
  uShow1: boolean = false;
  uShow2: boolean = false;
  uShow3: boolean = false;
  uShow4: boolean = false;
  constructor(private renderer: Renderer2, protected getWScroll: WindowScrollService) {}

  ngOnInit() {
    this.windowScroll();
    this.posUser1();
  }

  windowScroll() {
    this.subsWindowScroll = this.getWScroll.scroll$.subscribe(pos => {
      this.scroll = pos;
    });
  }

  posUser1() {
    this.renderer.listen('window', 'load', () => {
      this.u1 = this.user1.nativeElement.getBoundingClientRect().top;
      this.u2 = this.user2.nativeElement.getBoundingClientRect().top;
      this.u3 = this.user3.nativeElement.getBoundingClientRect().top;
      this.u4 = this.user4.nativeElement.getBoundingClientRect().top;
    });
  }

  get synAnim1() {
    if (this.scroll >= this.u1 - 190) {
      return (this.uShow1 = true);
    }
    //return this.scroll >= this.u1 - 190 ? this.uShow1 = true : ;
  }
  get synAnim2() {
    if (this.scroll >= this.u2 - 290) {
      return (this.uShow2 = true);
    }
    //return this.scroll >= this.u2 - 290 ? this.uShow2 = true : this.uShow2 = false;
  }
  get synAnim3() {
    if (this.scroll >= this.u3 - 310) {
      return (this.uShow3 = true);
    }
    //return this.scroll >= this.u3 - 310 ? this.uShow3 = true : this.uShow3 = false;
  }
  get synAnim4() {
    if (this.scroll >= this.u4 - 390) {
      return (this.uShow4 = true);
    }
    // return this.scroll >= this.u4 - 390 ? this.uShow4= true : this.uShow4 = false;
  }

  ngOnDestroy() {
    this.subsWindowScroll.unsubscribe();
  }
}

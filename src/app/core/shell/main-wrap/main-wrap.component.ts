import { Component, OnInit, Input } from '@angular/core';
import { WindowScrollService } from 'src/app/services/window-scroll/window-scroll.service';
import { SystemService } from 'src/app/services/system/system.service';
import { LocationService } from 'src/app/services/location/location.service';

@Component({
  selector: 'app-main-wrap',
  templateUrl: './main-wrap.component.html',
  styleUrls: ['./main-wrap.component.scss']
})
export class MainWrapComponent implements OnInit {
  @Input() wt: boolean = false;
  @Input() isHome: boolean = false;
  subsLocation: any;
  subsWindowScroll: any;
  system: string;
  subsSystem: any;
  scroll: number = 0;
  siteClass: string;
  constructor(protected location: LocationService, protected getWScroll: WindowScrollService, protected gsys: SystemService) {}

  ngOnInit() {
    this.getLocation();
    this.windowScroll();
    this.setSystem();
  }

  getLocation() {
    this.subsLocation = this.isHome = this.location.getIsLocationHome();
  }

  windowScroll() {
    this.subsWindowScroll = this.getWScroll.scroll$.subscribe(pos => {
      this.scroll = pos;
    });
  }

  setSystem() {
    this.subsSystem = this.system = this.gsys.getSystem(this.wt);
  }

  get scrollClass() {
    return this.scroll >= 80 ? 'on-scroll' : '';
  }

  get page() {
    return this.isHome ? 'is-home' : 'other-page';
  }

  ngOnDestroy() {
    // this.subsLocation.unsubscribe();
    this.subsWindowScroll.unsubscribe();
    // this.subsSystem.unsubscribe();
  }
}

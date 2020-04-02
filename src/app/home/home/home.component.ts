import { Component, OnInit, Input } from '@angular/core';
import { SystemService } from '../../services/system/system.service';

// dynamic seo test
import { LocationService } from '../../services/location/location.service';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @Input() wt: boolean = false;
  s: boolean = this.wt;
  system: string;
  subsSystem: any;
  seoUnsubscribe: any;
  constructor(protected gsys: SystemService, public loc: LocationService) {}

  ngOnInit() {
    this.setSystem();
    this.locSubscribe();
  }

  setSystem() {
    this.subsSystem = this.system = this.gsys.getSystem(this.wt);
  }

  locSubscribe() {
    this.seoUnsubscribe = this.loc.getMeta('wt', 'en');
  }

  ngOnDestrony() {
    this.seoUnsubscribe.unsubscribe();
  }
}

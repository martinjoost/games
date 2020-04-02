import { Component, OnInit, Input } from '@angular/core';
import { SystemService } from '../../services/system/system.service';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-featured-list',
  templateUrl: './featured-list.component.html',
  styleUrls: ['./featured-list.component.scss']
})
export class FeaturedListComponent implements OnInit {
  @Input() bigCenter: boolean = true;
  @Input() bigLeft: boolean = false;
  @Input() wt: boolean = false;
  @Input() gameType: string;
  @Input() currentJson: string = 'games';
  subsSystem: any;
  system: string;
  featured: number;
  jsonWTCasinoFeatured: any[] = [
    {
      id: 45,
      state: 'popular',
      url: '#'
    },
    {
      id: 58,
      state: 'new',
      url: '#'
    },
    {
      id: 55,
      state: 'popular',
      url: '#'
    }
  ];
  jsonWTScratchFeatured: any[] = [
    {
      id: 2,
      state: 'new',
      url: '#'
    },
    {
      id: 56,
      state: 'popular',
      url: '#'
    },
    {
      id: 8,
      state: 'popular',
      url: '#'
    }
  ];
  jsonLTKCasinoFeatured: any[] = [
    {
      id: 45,
      state: 'popular',
      url: '#'
    },
    {
      id: 58,
      state: 'new',
      url: '#'
    },
    {
      id: 55,
      state: 'popular',
      url: '#'
    }
  ];
  jsonLTKScratchFeatured: any[] = [
    {
      id: 2,
      state: 'new',
      url: '#'
    },
    {
      id: 56,
      state: 'popular',
      url: '#'
    },
    {
      id: 8,
      state: 'popular',
      url: '#'
    }
  ];

  constructor(protected gsys: SystemService) {}

  ngOnInit() {
    this.setSystem();
  }

  setSystem(): void {
    this.subsSystem = this.system = this.gsys.getSystem(this.wt);
  }

  get folderGameType() {
    return this.gameType === 'games' ? 'casino-games' : 'scratch-cards';
  }

  get arr() {
    if (this.wt) {
      return this.gameType === 'games' ? this.jsonWTCasinoFeatured : this.jsonWTScratchFeatured;
    } else {
      return this.gameType === 'games' ? this.jsonLTKCasinoFeatured : this.jsonLTKScratchFeatured;
    }
  }

  onNgDestroy() {
    // this.subsSystem.unsubscribe();
  }
}

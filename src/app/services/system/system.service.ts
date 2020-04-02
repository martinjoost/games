import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SystemService {
  systemArr: any = [
    {
      'system': 'ltk',
      'title': 'LottoKings: Play any lottery Online'
    },
    {
      'system': 'wt',
      'title': 'More lotteries, more chances, more fun'
    }
  ];
  constructor() { }

  getSystem(n:boolean) {
    return n ? 'wt' : 'ltk';
  }

  getSettings(){
    return this.systemArr;
  }
}

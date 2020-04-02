import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sys-wrap',
  templateUrl: './sys-wrap.component.html',
  styleUrls: ['./sys-wrap.component.scss']
})
export class SysWrapComponent implements OnInit {
  @Input() wt: boolean = false;
  constructor() {}

  ngOnInit() {}
}

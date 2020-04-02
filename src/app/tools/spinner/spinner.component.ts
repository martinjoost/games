import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {
  @Input() fullCover = false;
  color = 'accent';
  mode = 'indeterminate';
  strokeWidth: number = 3;
  diameter: number = 50;

  constructor() { }

  ngOnInit(): void {
  }

}

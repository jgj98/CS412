import { Component, OnInit, Input  } from '@angular/core';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  @Input()
  Weather: any[];
  constructor() { }

  ngOnInit(): void {
  }

}

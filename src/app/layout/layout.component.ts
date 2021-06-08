import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  navbarLocation: string;
  navbarLayout: string;
  navbarDirection: string;
  defaultStepIndex: number;
  disableNavigationBar: boolean = false;

  availableLocations: string[] = ['top', 'bottom', 'left', 'right'];
  availableLayouts: string[] = ['small', 'large-filled', 'large-empty', 'large-filled-symbols', 'large-empty-symbols'];
  availableDirections: string[] = ['left-to-right', 'right-to-left'];

  constructor() { }

  ngOnInit(): void {
    this.navbarLocation = this.availableLocations[0];
    this.navbarLayout = this.availableLayouts[0];
    this.navbarDirection = this.availableDirections[0];
    this.defaultStepIndex = 0;
  }

}

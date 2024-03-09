import { Component } from '@angular/core';

import { navItems } from './_nav';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss'],
})
export class DefaultLayoutComponent {

  public navItems = navItems;

  constructor(private domSanitizer:DomSanitizer) {}
}

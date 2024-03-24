import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { IconSetService } from '@coreui/icons-angular';
import { iconSubset } from './icons/icon-subset';
import { Title } from '@angular/platform-browser';
import { LoadingService } from './services/loading.service';

@Component({
  selector: 'app-root',
  template: ` <ng-container *ngIf="loadingService.isLoading$ | async">
      <div class="loading-overlay">
        <c-spinner size="sm" variant="grow"></c-spinner>
         Loading...
      </div>
    </ng-container>
    <router-outlet></router-outlet>`,
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  constructor(
    private router: Router,
    private titleService: Title,
    private iconSetService: IconSetService,
    public loadingService: LoadingService
  ) {
    // iconSet singleton
    iconSetService.icons = { ...iconSubset };
  }

  ngOnInit(): void {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
    });
  }
}

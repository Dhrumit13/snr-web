import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { ClassToggleService, HeaderComponent } from '@coreui/angular';
import { AuthService } from 'src/app/core/auth.service';

@Component({
  selector: 'app-default-header',
  templateUrl: './default-header.component.html',
})
export class DefaultHeaderComponent extends HeaderComponent {
  @Input() sidebarId: string = 'sidebar';

  constructor(
    private authService: AuthService,
    private router: Router,
    private classToggler: ClassToggleService
  ) {
    super();
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['login']);
  }
}

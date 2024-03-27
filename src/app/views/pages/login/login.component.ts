import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})

export class LoginComponent {
  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    this.authService.login().subscribe(() => {
      console.log('this.authService.isLoggedIn: ', this.authService.isLoggedIn);
      if (this.authService.isLoggedIn) {
        const redirectUrl = this.authService.redirectUrl
          ? this.authService.redirectUrl
          : '/snr/dashboard';
        this.router.navigate([redirectUrl]);
      }
    });
  }
}

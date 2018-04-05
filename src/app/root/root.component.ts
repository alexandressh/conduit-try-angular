import { Router } from '@angular/router';
import { AuthService } from './../services/auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'root-component',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent implements OnInit {
  isUserLoggedIn = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.authService.isUserLoggedInSubject.subscribe((isLoggedIn: boolean) => {
      this.isUserLoggedIn = isLoggedIn;
      if (!isLoggedIn) {
        this.router.navigate(['/register']);
      }
    });
  }

  logout() {
    this.authService.logout();
  }
}

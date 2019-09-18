import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Spring Boot con Angular';

  constructor(private router: Router) {
  }

  isLogin() {
    const token = sessionStorage.getItem('token');
    if ( token == null) {
      return false;
    } else {
      return true;
    }
  }

  logout() {
    sessionStorage.removeItem('token');
    this.router.navigate(['']);
  }
}

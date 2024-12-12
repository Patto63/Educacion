import { Component } from '@angular/core';
import { Auth, signOut } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private auth: Auth, private router: Router) {}

  async logout() {
    await signOut(this.auth);
    this.router.navigate(['/login']);
  }
}

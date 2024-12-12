import { Component } from '@angular/core';
import { Auth, signOut } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  showHeader = true; 
  constructor(private auth: Auth, private router: Router) {
        // Suscribirse a los cambios de ruta
        this.router.events.subscribe(() => {
          const currentRoute = this.router.url;
          // Mostrar el Header excepto en las rutas de login y register
          this.showHeader = !(currentRoute.includes('login') || currentRoute.includes('register'));
        });
  }

  async logout() {
    try {
      await signOut(this.auth);
      this.router.navigate(['/login']); // Redirige al login después de cerrar sesión
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  }
}

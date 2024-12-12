import { Component } from '@angular/core';
import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  email = '';
  password = '';

  constructor(private auth: Auth, private router: Router) {}

  async register() {
    try {
      await createUserWithEmailAndPassword(this.auth, this.email, this.password);
      alert('¡Registro exitoso! Ahora puedes iniciar sesión.');
      this.router.navigate(['/login']); // Redirige al login después del registro
    } catch (error: any) {
      if (error.code === 'auth/email-already-in-use') {
        alert('El correo ya está en uso. Por favor, usa otro correo.');
      } else {
        console.error('Error al registrar:', error);
        alert('Ocurrió un error durante el registro.');
      }
    }
  }
}




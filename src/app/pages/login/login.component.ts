import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../serveis/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html'
})
export class LoginComponent {

  email = '';
  contrasenya = '';
  error = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    const ok = this.authService.login(this.email, this.contrasenya);

    if (ok) {
      this.router.navigate(['/preferits']);
    } else {
      this.error = 'Credencials incorrectes';
    }
  }
}
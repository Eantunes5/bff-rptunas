import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  email = '';
  senha = '';

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  login() {
    const valid = this.authService.login(this.email, this.senha);

    if (valid) {
      this.router.navigate(['/app/dashboard']);
    } else {
      alert('Email ou senha inválidos');
    }
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }
}
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  email = '';
  senha = '';
  nome = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  register() {

    if (!this.nome || !this.email || !this.senha) {
      alert('Preencha todos os campos');
      return;
    }

    const success = this.authService.register({
      nome: this.nome,
      email: this.email,
      senha: this.senha
    });

    if (success) {
      alert('Cadastro realizado!');
      this.router.navigate(['/']);
    } else {
      alert('Usuário já existe!');
    }
  }

  goToLogin() {
    this.router.navigate(['/']);
  }
}
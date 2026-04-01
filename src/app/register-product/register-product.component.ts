import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register-product',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register-product.component.html'
})
export class RegisterProductComponent {

  nome = '';
  categoria = '';
  codigo = '';
  quantidade = 0;

  constructor(
    private productService: ProductService,
    private router: Router
  ) {}

  salvar() {
    this.productService.adicionar({
      id: 0,
      nome: this.nome,
      categoria: this.categoria,
      codigo: this.codigo,
      quantidade: this.quantidade
    });

    this.router.navigate(['/app/produtos']);
  }
}
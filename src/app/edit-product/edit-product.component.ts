import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService, Produto } from '../product.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-product',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css'
})
export class EditProductComponent implements OnInit {

  produto: Produto = {
    id: 0,
    nome: '',
    categoria: '',
    codigo: '',
    quantidade: 0
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const produtoEncontrado = this.productService.buscarPorId(id);

    if (produtoEncontrado) {
      this.produto = produtoEncontrado;
    } else {
      alert('Produto não encontrado');
      this.router.navigate(['/app/produtos']);
    }
  }

  salvar() {
    this.productService.atualizar(this.produto);
    alert('Produto atualizado!');
    this.router.navigate(['/app/produtos']);
  }

  voltar() {
  this.router.navigate(['/app/produtos']);
  }
}
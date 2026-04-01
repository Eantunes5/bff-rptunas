import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface Product {
  id: number;
  code: string;
  name: string;
  category: string;
  quantity: number;
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  constructor(private router: Router) {}

  products: Product[] = [
    { id: 1, code: 'P001', name: 'Cordão Plástico', category: 'Cordões', quantity: 120 },
    { id: 2, code: 'P002', name: 'Amortecedor Automotivo', category: 'Amortecedor', quantity: 8 },
    { id: 3, code: 'P003', name: 'Cabide Interno', category: 'Cabides', quantity: 45 },
    { id: 4, code: 'P004', name: 'Peça Personalizada', category: 'Custom', quantity: 3 }
  ];

  novoProduto() {
    this.router.navigate(['/app/novo-produto']);
  }

  verDetalhes(id: number) {
    this.router.navigate(['/app/produto', id]);
  }

}
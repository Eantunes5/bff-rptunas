import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Product {
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

  products: Product[] = [
    { code: 'P001', name: 'Cordão Plástico', category: 'Cordões', quantity: 120 },
    { code: 'P002', name: 'Amortecedor Automotivo', category: 'Amortecedor', quantity: 8 },
    { code: 'P003', name: 'Cabide Interno', category: 'Cabides', quantity: 45 },
    { code: 'P004', name: 'Peça Personalizada', category: 'Custom', quantity: 3 }
  ];

}

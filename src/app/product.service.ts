import { Injectable } from '@angular/core';

export interface Produto {
  id: number;
  nome: string;
  categoria: string;
  codigo: string;
  quantidade: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private storageKey = 'produtos';

  
  private isBrowser(): boolean {
    return typeof window !== 'undefined' && !!window.localStorage;
  }

  
  getProdutos(): Produto[] {
    if (!this.isBrowser()) return [];

    try {
      const dados = localStorage.getItem(this.storageKey);
      return dados ? JSON.parse(dados) : [];
    } catch (error) {
      console.error('Erro ao ler produtos:', error);
      return [];
    }
  }

  
  salvarProdutos(produtos: Produto[]) {
    if (!this.isBrowser()) return;

    try {
      localStorage.setItem(this.storageKey, JSON.stringify(produtos));
    } catch (error) {
      console.error('Erro ao salvar produtos:', error);
    }
  }

  
  adicionar(produto: Produto) {
    const produtos = this.getProdutos();

    produto.id = new Date().getTime(); // ID simples
    produtos.push(produto);

    this.salvarProdutos(produtos);
  }

  
  atualizar(produtoAtualizado: Produto) {
    const produtos = this.getProdutos().map(p =>
      p.id === produtoAtualizado.id ? produtoAtualizado : p
    );

    this.salvarProdutos(produtos);
  }

  
  excluir(id: number) {
    const produtos = this.getProdutos().filter(p => p.id !== id);
    this.salvarProdutos(produtos);
  }

  
  buscarPorId(id: number): Produto | undefined {
    return this.getProdutos().find(p => p.id === id);
  }
}
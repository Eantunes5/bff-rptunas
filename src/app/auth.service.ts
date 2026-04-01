import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private STORAGE_KEY = 'users';

  getUsers(): any[] {
    return JSON.parse(localStorage.getItem(this.STORAGE_KEY) || '[]');
  }

  saveUsers(users: any[]) {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(users));
  }

  register(user: any): boolean {
    const users = this.getUsers();

    const exists = users.find(u => u.email === user.email);
    if (exists) return false;

    users.push(user);
    this.saveUsers(users);
    return true;
  }

  login(email: string, senha: string): boolean {
    const users = this.getUsers();
    return users.some(u => u.email === email && u.senha === senha);
  }
}
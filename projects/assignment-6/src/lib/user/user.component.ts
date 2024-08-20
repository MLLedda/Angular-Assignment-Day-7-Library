import { Component } from '@angular/core';

interface User {
  id: number;
  name: string;
  email: string;
}

@Component({
  selector: 'lib-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  users: User[] = [];
  nextId = 1;

  createUser() {
    const newUser: User = {
      id: this.nextId++,
      name: `User ${this.nextId}`,
      email: `user${this.nextId}@example.com`
    };
    this.users.push(newUser);
    console.log('User created:', newUser);
  }

  readUser() {
    console.log('All users:', this.users);
  }

  updateUser(userId: number, newName: string, newEmail: string) {
    const user = this.users.find(u => u.id === userId);
    if (user) {
      user.name = newName;
      user.email = newEmail;
      console.log('User updated:', user);
    } else {
      console.log('User not found');
    }
  }

  deleteUser(userId: number) {
    this.users = this.users.filter(u => u.id !== userId);
    console.log('User deleted with ID:', userId);
  }
}
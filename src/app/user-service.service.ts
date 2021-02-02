import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UserServiceService {

  constructor(private http: HttpClient) { }

  private baseUrl = 'http://localhost:3000/user/';

  // API for listing user
  getAllUsers() {
    return this.http.get(this.baseUrl);
  }

  // API for updating user
  updateUser(user) {
    return this.http.put(this.baseUrl, user);
  }

  // API for creating user
  createUser(user) {
    return this.http.post(this.baseUrl, user);
  }

  // API for deleting user
  deleteUser(id: string) {
    return this.http.delete(this.baseUrl + id);
  }
}

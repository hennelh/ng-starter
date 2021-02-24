import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Order } from '../models/order.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  userBaseUrl = "https://5fb6135636e2fa00166a4d8a.mockapi.io/api";

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.userBaseUrl}/users`).pipe(
      catchError(this.handleError<User[]>('getUsers', []))
    );
  }

  getUserOrders(id: string): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.userBaseUrl}/users/${id}/orders`).pipe(
      catchError(this.handleError<Order[]>('getUserOrders', []))
    )
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      // open modal for error message
      return of(result as T);
    };
  }
}

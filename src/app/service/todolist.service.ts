import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodolistService {
  todoListApi = 'https://5ffdb44bd9ddad0017f68690.mockapi.io/api/v1/toDoList';
  constructor(private http: HttpClient) {}

  getTodoList(): Observable<any>{
    return this.http.get(this.todoListApi);
  }

}

import { getLocaleDateFormat } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { TodolistService } from '../service/todolist.service';
import { Todo } from '../todo';
import { TodoDto } from '../todo-dto';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
})
export class TodolistComponent implements OnInit, OnDestroy {
  public title = 'TODOLIST';
  destroy$ = new Subject();

  todo: TodoDto[] = [];

  constructor(private todoListService: TodolistService) {}

  ngOnInit(): void {
    this.getTodoList();
  }

  getTodoList(): void {
    this.todoListService
      .getTodoList()
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => {
        console.log(data);
        this.todo = data;
      });
  }

  addTodoList(): void {
    if (this.title == '') {
      alert('please input value');
      return;
    }
    let todoItem = new Todo();

    todoItem.id = this.todo.length;
    todoItem.title = this.title;
    todoItem.status = false;
    todoItem.createdAt = new Date().toLocaleString();

    this.todo.push(todoItem);
    this.title = '';
  }

  //title from input component
  addTodoListInput(value: string): void {
    if (value == '') {
      return;
    }
    let todoItem = new Todo();
    let date = new Date().toLocaleString();

    todoItem.id = this.todo.length;
    todoItem.title = value;
    todoItem.status = false;
    todoItem.createdAt = date;
    this.todo.push(todoItem);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

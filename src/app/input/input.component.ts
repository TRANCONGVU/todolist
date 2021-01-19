import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  title = '';
  @Output() itemTodo = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }
  addTodoItem(){
    this.itemTodo.emit(this.title);
    this.title = '';
  }
}

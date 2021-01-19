import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css'],
})
export class ListItemComponent implements OnInit {
  @Input() listItem: any = [];
  constructor() {}

  ngOnInit(): void {}

  removeTodoItem(param: any): void {
    let index = this.listItem.findIndex(
      (item: { id: any }) => item.id === param
    );
    this.listItem.splice(index, 1);
  }

  checkTodoList(param: any): void {
    let index = this.listItem.findIndex(
      (item: { id: any }) => item.id === param
    );
    this.listItem[index].status = true;
  }
}

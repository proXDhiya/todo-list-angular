import { Component, OnInit } from '@angular/core';
import { Todo } from './../../modules/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todoList: Todo[] = [];

  tempName: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onCreateNewTodo(): void {
    // check if the tempName is empty
    if (this.tempName.length === 0)
      return;

    // push at the top of the array
    this.todoList.unshift({
      content: this.tempName,
      completed: false
    });
    this.tempName = '';
  }

  onToggle(id: number): void {
    this.todoList[id].completed = !this.todoList[id].completed;
  }
}

import { Component, OnInit } from '@angular/core';
import { Todo } from './../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: Todo[];
  inputTodo : string = " ";

  constructor() {}

  ngOnInit(): void {
    this.todos = [
      { content: 'First Todo', completed: false },
      { content: 'second Todo', completed: false },
    ];
  }
  toggleDone(id:number) {
    this.todos.map((v, i) => {
      if (i == id) v.completed = !v.completed;
      return v;
    });
  }
  DeleteTodo(id:number){
    this.todos = this.todos.filter((v,i) => i !== id);
  }

  AddTodo(){
    this.todos.push({
      content: this.inputTodo,
      completed: false
    })
  }
}

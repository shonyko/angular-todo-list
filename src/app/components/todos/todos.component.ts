import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {  

  todos: Todo[];
  inputTodo: string;

  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {
        title: 'First todo',
        completed: false
      }, 
      {
        title: 'Test completed',
        completed: true
      }
    ]
  }

  toggleCompleted(id: number): void {
    this.todos.forEach((val, i) => {
      if(i == id) val.completed = !val.completed;
    })
  }

  deleteTodo(id: number): void {
    this.todos = this.todos.filter((_, i) => i != id);
  }

  addTodo(): void {
    this.todos.push({
      title: this.inputTodo,
      completed: false
    });

    this.inputTodo = "";
  }
}

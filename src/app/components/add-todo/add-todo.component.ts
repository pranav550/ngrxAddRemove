import { TodoAdd } from './../../actions/todo.actions';
import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { Todo } from 'src/app/shared/models/todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  constructor(private store: Store<{ todos: Todo[] }>) { }


  ngOnInit(): void {
  }


  addTodo(todo: string) {
    const newTodo = new Todo();
    newTodo.title = todo;
    this.store.dispatch(new TodoAdd(newTodo))
  }

}

import { Todo } from './../todo/todo.component';
import { TodoDataService } from './../service/data/todo-data.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos: Todo[];
  message: string;

  constructor(private todoService: TodoDataService,
              private router: Router) { }

  ngOnInit() {
    this.refreshTodos();
  }

  refreshTodos() {
    this.todoService.retrieveAllTodos('lithy').subscribe(
      response => this.todos = response
    );
  }

  deleteTodo(id) {
    this.todoService.deleteTodo('lithy', id).subscribe (
      response => {
        this.message = `Delete of Todo ${id} Successful!`;
        this.refreshTodos();
      }
    );
  }

  updateTodo(id) {
    this.router.navigate(['todos', id]);
  }

  addTodo() {
    this.router.navigate(['todos', -1]);
  }
}

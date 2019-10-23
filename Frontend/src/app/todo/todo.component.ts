import { ActivatedRoute, Router } from '@angular/router';
import { TodoDataService } from './../service/data/todo-data.service';
import { Component, OnInit } from '@angular/core';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) { }
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id: number;
  todo: Todo;

  constructor(
    private todoService: TodoDataService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    // initialize the todo with new instance
    // as the subscribe method might not be finished executing
    // dummy solution to be changed later
    this.todo = new Todo(this.id, '', false, new Date());

    if (this.id != -1) {
      this.todoService.retrieveTodo('lithy', this.id)
        .subscribe (
          data => this.todo = data
        );
    }
  }

  saveTodo() {
    if (this.id == -1) {
      this.todoService.createTodo('lithy', this.todo)
          .subscribe (
            data => this.router.navigate(['todos'])
          );
    } else {
      this.todoService.updateTodo('lithy', this.id, this.todo)
          .subscribe (
            data => this.router.navigate(['todos'])
          );
    }
  }

}

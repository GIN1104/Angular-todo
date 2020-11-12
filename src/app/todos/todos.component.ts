import { Component,  OnInit } from '@angular/core';
import { delay } from 'rxjs/operators';
import { TodosService } from '../shared/todos.service';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
 loading = true;
 searchString = '';

  constructor(public todosService: TodosService) { }

  ngOnInit(): void {
    this. todosService.fetchTodos()
    .pipe(delay(500))
    .subscribe(() => {
      this.loading = false;
    });
  }

  onChange(id: number): void{
    // this.onToggle.emit(id);
    this.todosService.onToggle(id);
  }
  removeTodo(id: number): void{
     this.todosService.removeTodo(id);
  }
}

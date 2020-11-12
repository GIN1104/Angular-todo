import { from, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {tap} from 'rxjs/operators';

export interface Todo {
    id: number;
    title: string;
    completed: boolean;
    date?: any;
  }
@Injectable({providedIn: 'root'})
export class TodosService {
     todos: Todo[] = [
        // {id: 1, title: 'Study JS', completed: false, date: new Date()},
        // {id: 2, title: 'Study React', completed: true, date: new Date()},
        // {id: 3, title: 'Study Angular', completed: false, date: new Date()},
        // {id: 4, title: 'Study Vue', completed: false, date: new Date()},
    ];
constructor(private http: HttpClient){}

fetchTodos(): Observable<Todo[]>{
    return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10')
     .pipe(tap(todos => this.todos = todos));
}
 onToggle(id: number): void{
    console.log(id);
    const idx = this.todos.findIndex(t => t.id === id);
    this.todos[idx].completed = !this.todos[idx].completed;
  }
  removeTodo(id: number): void{
   this.todos = this.todos.filter(t => t.id !== id);
}
addTodo(todo: Todo): void {
    this.todos.push(todo);
}
}

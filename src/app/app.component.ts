import { Component } from '@angular/core';
import { Todo } from './Todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  localItem = null
  todos:Todo[]=[];

  constructor(){
    this.localItem = localStorage.getItem("todos") as any;
    if(this.localItem === null){
      this.todos = []
    }else{
      this.todos = JSON.parse(this.localItem)
    }
   

  }

  deleteTodo(todo:Todo){
   const index = this.todos.indexOf(todo);
   this.todos.splice(index,1);
   localStorage.setItem("todos", JSON.stringify(this.todos));
  }
  addTodo(todo:Todo){
    this.todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
  
}

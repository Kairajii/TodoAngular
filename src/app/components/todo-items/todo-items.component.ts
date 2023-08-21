import { Component,EventEmitter,Input,OnInit,Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css']
})
export class TodoItemsComponent {
  constructor() {}
  @Input() todo = {} as Todo;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  handleDelete(todo:Todo){
    this.todoDelete.emit(todo)
    console.log("delete button trigrred")
  }
}

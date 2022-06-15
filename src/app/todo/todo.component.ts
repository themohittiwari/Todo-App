import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  constructor() {}
  public list = [
    {
      id: 0,
      text: 'Lorem ipsum',
      status: 'inprogress',
    },
  ];

  public text = '';
  public status = '';
  public edit = false;
  public index = -1;
  add() {
    let obj = {
      id: this.list.length,
      text: this.text,
      status: this.status,
    };

    this.list.push(obj);
    this.status = '';
    this.text = '';
  }

  saveChanges() {
    let id = this.list[this.index].id;
    let obj = {
      text: this.text,
      status: this.status,
      id,
    };
    this.list[id] = obj;
    this.status = '';
    this.text = '';
    this.index = -1;
    this.edit = false;
  }

  editTodo(id: any) {
    this.edit = true;
    let index = this.list.findIndex((obj) => obj.id === id);
    this.status = this.list[index].status;
    this.text = this.list[index].text;
    this.index = index;
  }

  deleteTodo(id: number) {
    let result = this.list.filter((todo) => todo.id !== id);
    this.list = result;
  }

  getTodoData(event: any) {
    this.text = event.target.value;
  }

  getStatus(event: any) {
    this.status = event.target.value;
  }
  ngOnInit(): void {}
}

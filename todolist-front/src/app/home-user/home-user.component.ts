import { Component, OnInit } from '@angular/core';
import { Todolist, User, Tasks } from '../_models';
import { TodolistService } from '../_services/todolist.service';
import { TaskService } from '../_services/task.service';
declare var $: any;

@Component({
  selector: 'app-home-user',
  templateUrl: './home-user.component.html',
  styleUrls: ['./home-user.component.scss']
})
export class HomeUserComponent implements OnInit {
  currentUser: User;
  myTodolist: Todolist;

  constructor(private todolistService: TodolistService, private taskService: TaskService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    this.todolistService.getByUserId(this.currentUser.id).subscribe(todolist => {
      this.myTodolist = todolist;
    });
  }

  deleteTask(id: number) {
    this.taskService.delete(id).subscribe();
  }
}

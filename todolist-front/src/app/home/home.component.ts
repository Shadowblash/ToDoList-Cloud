import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { User, Todolist, Tasks } from '../_models';
import { UserService } from '../_services';
import { TodolistService } from '../_services/todolist.service';
import { NgbDateNativeAdapter } from '@ng-bootstrap/ng-bootstrap';
import { TaskService } from '../_services/task.service';

@Component({
    templateUrl: 'home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
    currentUser: User;
    events: string[] = [];
    opened: boolean;  
    users: User[] = [];
    myTodolist: Todolist;

    constructor(private userService: UserService, private todolistService: TodolistService, private taskService: TaskService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
        this.loadAllUsers();
        this.todolistService.getByUserId(this.currentUser.id).subscribe(todolist => {
            this.myTodolist = todolist;
        });
    }

    deleteUser(id: number) {
        this.userService.delete(id).pipe(first()).subscribe(() => { 
            this.loadAllUsers() 
        });
    }

    private loadAllUsers() {
        this.userService.getAll().subscribe(users => { 
            this.users = users;
            console.log(users);
        });
    }

    addTask(libelle: string) {
        const task = new Tasks();
        task.libelle = libelle;
        task.date = new Date();
        this.myTodolist.tasks.push(task);
        this.todolistService.update(this.myTodolist).subscribe();
    }
}
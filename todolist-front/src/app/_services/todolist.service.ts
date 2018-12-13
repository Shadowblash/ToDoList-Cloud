import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { config } from './../../environments/environment';
import { Todolist } from '../_models/todolist';

@Injectable()
export class TodolistService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Todolist[]>(`${config.apiUrl}/todolist`);
    }

    getByUserId(id: number) {
        return this.http.get<Todolist>(`${config.apiUrl}/todolist/todolistByUserId/` + id);
    }

    getById(id: number) {
        return this.http.get(`${config.apiUrl}/todolist/` + id);
    }

    register(todolist: Todolist) {
        return this.http.post(`${config.apiUrl}/todolist`, todolist);
    }

    update(todolist: Todolist) {
        return this.http.put(`${config.apiUrl}/todolist`, todolist);
    }

    delete(id: number) {
        return this.http.delete(`${config.apiUrl}/todolist/` + id);
    }
}
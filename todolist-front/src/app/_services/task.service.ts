
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { config } from './../../environments/environment';
import { Tasks } from '../_models/tasks';

@Injectable()
export class TaskService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Tasks[]>(`${config.apiUrl}/task`);
    }

    add(task: Tasks) {
        return this.http.post(`${config.apiUrl}/task`, task);
    }

    update(tasks: Tasks) {
        return this.http.put(`${config.apiUrl}/task/`, tasks);
    }

    delete(id: number) {
        return this.http.delete(`${config.apiUrl}/task/` + id);
    }
}
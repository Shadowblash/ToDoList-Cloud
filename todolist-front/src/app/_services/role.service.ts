import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { config } from './../../environments/environment';
import { Role } from '../_models/role';

@Injectable()
export class RoleService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Role[]>(`${config.apiUrl}/roles`);
    }

    getById(id: number) {
        return this.http.get(`${config.apiUrl}/roles/` + id);
    }

    register(Role: Role) {
        return this.http.post(`${config.apiUrl}/roles`, Role);
    }

    update(Role: Role) {
        return this.http.put(`${config.apiUrl}/roles/` + Role.id, Role);
    }

    delete(id: number) {
        return this.http.delete(`${config.apiUrl}/roles/` + id);
    }
}
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AlertService, UserService } from '../_services';
import { Role } from '../_models/role';
import { RoleService } from '../_services/role.service';

@Component({ templateUrl: 'register.component.html',
 styleUrls: ['register.component.scss'] })
export class RegisterComponent implements OnInit {
    registerForm: FormGroup;
    loading = false;
    submitted = false;

    roles: Role[] = [];

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private userService: UserService,
        private roleService: RoleService,
        private alertService: AlertService) { }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            firstname: ['', Validators.required],
            lastname: ['', Validators.required],
            username: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });

        this.roleService.getAll().subscribe(roles => {
            this.roles = roles;
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

        this.loading = true;
        this.registerForm.value.role = this.roles[0];

        console.log(this.registerForm.value);

        this.userService.register(this.registerForm.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.alertService.success('Registration successful', true);
                    this.router.navigate(['/login']);
                },
                error => {
                    console.log(error);
                    console.log("ERROOOOOOOOOOOR");
                });
    }
}

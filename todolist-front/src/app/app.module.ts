import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent }  from './app.component';
import { routing }        from './app.routing';

import { AlertComponent } from './_directives';
import { AuthGuard } from './_guards';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { AlertService, AuthenticationService, UserService } from './_services';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
// import { fakeBackendProvider } from './_helpers';
import * as $ from "jquery";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatCheckboxModule
  } from '@angular/material';  
import { RoleService } from './_services/role.service';
import { TodolistService } from './_services/todolist.service';;
import { HomeAdminComponent } from './home-admin/home-admin.component'
;
import { HomeUserComponent } from './home-user/home-user.component'
import { TaskService } from './_services/task.service';

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        FormsModule,
        MatSidenavModule,
        MatCheckboxModule,
        NgbModule,
        routing,
        BrowserAnimationsModule    ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent
,
        HomeAdminComponent ,
        HomeUserComponent   ],
    providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,
        RoleService,
        TodolistService,
        TaskService,
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }

   //     fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
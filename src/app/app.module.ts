import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { routing } from "../app/app.routes";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";

//image upload
import { UploadOutput, UploadInput, UploadFile, humanizeBytes } from "ngx-uploader";
import { NgUploaderModule } from "ngx-uploader";
import { DashboardComponent } from './dashboard/dashboard.component';
import { ImageService } from "../app/image-upload/image.service";

import { ApiService } from "./shared-service/api.service";
import { AuthModule } from 'angular2-jwt';
import { AuthHttp, AuthConfig, AUTH_PROVIDERS, provideAuth } from 'angular2-jwt';
import { HttpModule } from '@angular/http';
import { Auth } from './shared-service/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    ImageUploadComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    NgUploaderModule,
    routing,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    AuthModule,
  ],
  providers: [
    ApiService,
    Auth,
    ImageService,
  
    AuthHttp,
    provideAuth({
        headerName: 'Authorization',
        headerPrefix: 'bearer',
        tokenName: 'token',
        tokenGetter: (() => localStorage.getItem('id_token')),
        globalHeaders: [{ 'Content-Type': 'application/json' }],
        noJwtError: true
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

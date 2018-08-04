import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app.routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SigninComponent } from './authentication/signin/signin.component';
import { SignupComponent } from './authentication/signup/signup.component';
import { HomeComponent } from './home/home.component';
import { AuthService } from './authentication/auth.service';
import { JwtInterceptor } from './interceptors/jwt.interceptor';
import { ErrorIntercptor } from './interceptors/error.interceprot';
import { AllFurnitureComponent } from './furniture/all-furniture/all-furniture.component';
import { CreateFurnitureComponent } from './furniture/create-furniture/create-furniture.component';
import { FurnitureDetailsComponent } from './furniture/furniture-details/furniture-details.component';
import { MyFurnitureComponent } from './furniture/my-furniture/my-furniture.component';
import { FurnitureService } from './furniture/furniture.service';
import { CustomFormsModule } from '../../node_modules/ng2-validation';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SigninComponent,
    SignupComponent,
    HomeComponent,
    AllFurnitureComponent,
    CreateFurnitureComponent,
    FurnitureDetailsComponent,
    MyFurnitureComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CustomFormsModule,
    ToastrModule.forRoot()
  ],
  providers: [
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorIntercptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    },
    FurnitureService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

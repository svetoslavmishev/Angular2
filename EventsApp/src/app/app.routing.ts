import { NgModule } from '../../node_modules/@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SigninFormComponent } from './components/authentication/signin-form/signin-form.component';
import { SignupFormComponent } from './components/authentication/signup-form/signup-form.component';
import { NewsListComponent } from './components/news/news-list/news-list.component';
import { EventsRoutingModule } from './components/events/events-routing.module';
import { EventsModule } from './components/events/events.module';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'news', component: NewsListComponent },
  { path: 'auth/signin', component: SigninFormComponent },
  { path: 'auth/signup', component: SignupFormComponent },
  //TODO => Add GUARDS
  { path: 'events', loadChildren: () => EventsRoutingModule }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

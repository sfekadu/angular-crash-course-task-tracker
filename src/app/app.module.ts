import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { TaskService } from './task.service';
import { UiService } from './ui.service';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ButtonComponent } from './button/button.component';
import { HeaderComponent } from './header/header.component';
import { TasksComponent } from './tasks/tasks.component';
import { TaskItemComponent } from './task-item/task-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddTaskComponent } from './add-task/add-task.component';
import { AboutComponent } from './about/about.component';

const appRoutes: Routes = [
  {path:'', component: TasksComponent},
  {path:'about', component: AboutComponent}
]

@NgModule({
  imports: [
    BrowserModule, 
    FormsModule, 
    FontAwesomeModule, 
    HttpClientModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true})
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    ButtonComponent,
    HeaderComponent,
    TasksComponent,
    TaskItemComponent,
    AddTaskComponent,
    AboutComponent
  ],
  bootstrap: [AppComponent],
  providers: [TaskService, UiService]
})
export class AppModule {}

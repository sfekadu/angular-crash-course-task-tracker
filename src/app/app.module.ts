import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ButtonComponent } from './button/button.component';
import { HeaderComponent } from './header/header.component';
import { TasksComponent } from './tasks/tasks.component';
import { TaskItemComponent } from './task-item/task-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [BrowserModule, FormsModule, FontAwesomeModule],
  declarations: [
    AppComponent,
    HelloComponent,
    ButtonComponent,
    HeaderComponent,
    TasksComponent,
    TaskItemComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

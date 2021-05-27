import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Task } from './Task';
import { TASKS } from './mock-tasks';

//import { JsonService } from './json.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
}

@Injectable()
export class TaskService {
  private apiUrl_backp = 'http://localhost:5000/tasks';
  private apiUrl = 'https://angular-crash-course-task-tracker.stackblitz.io/assets/db.json';
  private dbFile= 'assets/db.json';

  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    console.log('Task Service: getTask: ');
    const tasks = of(TASKS);
    return tasks;

    //console.log('TEST');
    //console.log(this.http.get<Task[]>(this.dbFile).toPromise())
    //return this.http.get<Task[]>(this.dbFile);
  }

  deleteTask(task: Task) : Observable<Task[]>{
    console.log('Task Service: deleteTask: ');
    //console.log(task);
    //const url = `${this.apiUrl}/${task.id}`;
    //return this.http.delete<Task>(url);

    //const url = `${this.dbFile}/${task.id}`;
    //return this.http.delete<Task>(this.dbFile);

    const tasks = of(TASKS);
    return tasks; 

  }

  updateTaskReminder(task: Task){
    console.log('Task Service: updateTaskReminder: ');
    console.log(task);
    const url = `${this.dbFile}/${task.id}`;
    return this.http.put<Task>(url, httpOptions);
  }

  addTask(task: Task) : Observable<Task[]>{
    console.log('Task Service: addTask: ');
    console.log(task);
    //return this.http.post<Task>(this.dbFile, task, httpOptions);

    TASKS.push(task);
    console.log(TASKS);
    const tasks = of(TASKS);
    return tasks; 
  }
}

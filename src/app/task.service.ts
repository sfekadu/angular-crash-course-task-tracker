import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Task } from './Task';
import { TASKS } from './mock-tasks';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
}

@Injectable()
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks';
  private dbFile= 'db.json';

  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    const tasks = of(TASKS);
    return tasks;
    
    //return this.http.get<Task[]>(this.apiUrl);
    //return this.http.get<Task[]>(this.dbFile);
  }

  deleteTask(task: Task) : Observable<Task[]>{
    console.log(task);
    //const url = `${this.apiUrl}/${task.id}`;
    //return this.http.delete<Task>(url);

    const tasks = of(TASKS);
    return tasks; 

  }

  updateTaskReminder(task: Task){
    console.log(task);
    //const url = `${this.apiUrl}/${task.id}`;
    //return this.http.put<Task>(url, httpOptions);
  }

  addTask(task: Task) : Observable<Task[]>{
    console.log(task);
    //const url = `${this.apiUrl}/${task.id}`;
    //return this.http.delete<Task>(url);

    const tasks = of(TASKS);
    return tasks; 

  }
}

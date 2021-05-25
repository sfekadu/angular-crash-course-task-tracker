import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Task } from './Task';
import { TASKS } from './mock-tasks';

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
}

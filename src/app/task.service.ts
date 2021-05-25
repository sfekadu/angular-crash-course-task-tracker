import { Injectable } from '@angular/core';

import {Task} from './Task';
import {TASKS} from './mock-tasks'


@Injectable()
export class TaskService {

  constructor() { }

  getTasks(): Task[] {
    return TASKS;
  }

}
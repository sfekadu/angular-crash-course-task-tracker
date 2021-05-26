import { Component, OnInit } from '@angular/core';
import {Task} from '../Task';
//import {TASKS} from '../mock-tasks'
import {TaskService} from '../task.service';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  
  constructor( private taskSerive: TaskService) { }

  ngOnInit() {
    this.taskSerive.getTasks().subscribe( (tasks) => (this.tasks = tasks) );
  }

  deleteTask(task: Task){
    console.log(task);
    this.taskSerive.deleteTask(task).subscribe( () => this.tasks = this.tasks.filter(t=> t.id !== task.id) );
  }
}
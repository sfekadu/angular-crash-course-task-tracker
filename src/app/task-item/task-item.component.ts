import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import {Task} from '../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input()  task: Task;
  @Output() onDeletetask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleTask: EventEmitter<Task> = new EventEmitter();

  faTimes=faTimes;
  constructor() { }

  ngOnInit() {
  }

  onDelete(task)  {
    //console.log(task);
    this.onDeletetask.emit();
  }

  onToggle(task){
    //console.log(task);
    this.onToggleTask.emit();
  }

}
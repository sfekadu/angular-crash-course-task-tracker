import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../Task';
import { UiService } from '../ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task>=new EventEmitter();
  text: string;
  day: string;
  reminder: boolean = false;
  showAddTask: boolean;
  subscription: Subscription;

  constructor(private uiService: UiService) { 
    this.uiService
    .onToggle()
    .subscribe(value => this.showAddTask=value);
  }

  ngOnInit() {
  }

  onSubmit(){
    if(!this.text)
    {
      alert("please ad a task");
      return;
    }

    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }

    this.onAddTask.emit(newTask);

    //clear form for next new task
    this.text='';
    this.day='';
    this.reminder=false;

  }

}
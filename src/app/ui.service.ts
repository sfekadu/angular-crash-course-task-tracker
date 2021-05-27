import { Injectable } from '@angular/core';
import { ObjectUnsubscribedError, Observable, Subject } from 'rxjs';

@Injectable()
export class UiService {
  private showAddTask: boolean = false;
  private subject = new Subject<any>();

  constructor() {}

  toggleAddTask(): void {
    console.log('UiService.toggleAddTask() called.')
    this.showAddTask = !this.showAddTask;
    this.subject.next(this.showAddTask);
  }

  onToggle() : Observable<any> {
    return this.subject.asObservable();
  }
}

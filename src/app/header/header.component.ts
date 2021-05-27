import { Component, OnInit } from '@angular/core';
import { UiService } from '../ui.service';
import { Subscription } from 'rxjs';
import {Router} from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'Task Tracker';
  showAddTask: boolean;
  subscription: Subscription;

  constructor(private uiService: UiService, private router: Router) {
    this.subscription = this.uiService
    .onToggle()
    .subscribe( value => this.showAddTask = value);
  }

  ngOnInit() {}

  toggleAddTask(){
    //console.log("toggle");
     //bad way to achieve behaviour.
    //this.showAddTask = !this.showAddTask;

    //good way to do it, via event stream?
    this.uiService.toggleAddTask();
  }

  hasRoute(route: string){
    return this.router.url === route;
  }
}

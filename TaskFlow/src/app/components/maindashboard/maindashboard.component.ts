import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/states/app-state';
import * as taskActions from '../../states/task/task-action';
import { Task } from 'src/app/domain/task-model';
import { Observable } from 'rxjs';
import { selectTasks } from 'src/app/states/task/task-selector';

@Component({
  selector: 'app-maindashboard',
  templateUrl: './maindashboard.component.html',
  styleUrls: ['./maindashboard.component.css']
})
export class MaindashboardComponent implements OnInit {
  tasks$: Observable<Task[]>;
  tasks: Task[] = [];

  constructor(private store: Store<AppState>) {
    this.tasks$ = this.store.select(selectTasks);
    this.tasks$.subscribe((tasks: any): void =>{
      this.tasks = tasks;
    })
    
  }

  ngOnInit(): void {
    this.store.dispatch(taskActions.getTasks());
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from '../domain/task-model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private url_user = 'http://localhost:8081/api/v1/tasks/'; 

  constructor(private _https : HttpClient) { }

  
  public getTasks(): Observable<Task[]>{

    return this._https.get<Task[]>(this.url_user+'overview');
  }

  public creatTask(task : Task): Observable<Task>{
    return this._https.post<Task>(this.url_user+'create',task);
  }
}

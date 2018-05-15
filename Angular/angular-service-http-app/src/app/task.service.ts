import { BehaviorSubject } from 'Rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks: BehaviorSubject<any[]> = new BehaviorSubject([]);
  constructor(private _http: HttpClient) {
    this.retrieveTasks()
   }
  retrieveTasks(){
    this._http.get('https://5afb1186bc1beb0014c29db1.mockapi.io/task').subscribe( (task: any[]) => { this.tasks.next(task)});
  }
  addTask(newTask: any ){
    this._http.post('https://5afb1186bc1beb0014c29db1.mockapi.io/task', newTask).subscribe( (response) => {this.retrieveTasks();});  
  }
}

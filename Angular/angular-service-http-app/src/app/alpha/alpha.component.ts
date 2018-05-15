import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-alpha',
  templateUrl: './alpha.component.html',
  styleUrls: ['./alpha.component.css']
})
export class AlphaComponent implements OnInit {
  tasks: any[] = [];

  constructor(private _taskService: TaskService ) { }
  onSubmit(){
    console.log("clicked")
  }
  ngOnInit() {
    this._taskService.tasks.subscribe(
      (data) => {this.tasks = data;}
    );
  }

}

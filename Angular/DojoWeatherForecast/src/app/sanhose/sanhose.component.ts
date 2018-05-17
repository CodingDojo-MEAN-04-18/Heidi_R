import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-sanhose',
  templateUrl: './sanhose.component.html',
  styleUrls: ['./sanhose.component.css']
})
export class SanhoseComponent implements OnInit {
  weather;
  constructor(private _taskService: TaskService) { }

  ngOnInit() {
    this._taskService.getWeather(94088)
    .subscribe(
      (Response) => {console.log(Response),this.weather = Response}
    )
  }

}

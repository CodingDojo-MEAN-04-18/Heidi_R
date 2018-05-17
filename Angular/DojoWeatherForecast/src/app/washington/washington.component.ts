import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-washington',
  templateUrl: './washington.component.html',
  styleUrls: ['./washington.component.css']
})
export class WashingtonComponent implements OnInit {
  weather;
  constructor(private _taskservice: TaskService) { }

  ngOnInit() {
    this._taskservice.getWeather(20001)
    .subscribe(
      (Response) => {console.log(Response),this.weather = Response}
    )
  }

}

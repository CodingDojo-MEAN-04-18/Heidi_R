import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/task.service';
import { Response } from '@angular/http/src/static_response';

@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css']
})
export class SeattleComponent implements OnInit {
  weather;
  constructor(private _taskService: TaskService) { }

  ngOnInit() {
    this._taskService.getWeather(98101)
    .subscribe(
      (Response) => {this.weather = Response}
    )
  }

}

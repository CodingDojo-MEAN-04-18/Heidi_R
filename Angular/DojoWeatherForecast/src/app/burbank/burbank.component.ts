import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./burbank.component.css']
})
export class BurbankComponent implements OnInit {
  weather;
  constructor(private _taskService: TaskService) { }

  ngOnInit() {
    this._taskService.getWeather(75001)
    .subscribe(
      (Response) => {console.log(Response),this.weather = Response}
    )
  }

}

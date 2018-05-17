import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.css']
})
export class ChicagoComponent implements OnInit {
  weather;
  constructor(private _taskService: TaskService) { }

  ngOnInit() {
    this._taskService.getWeather(60007)
    .subscribe(
      (Response) => {console.log(Response),this.weather = Response}
    )
  }

}

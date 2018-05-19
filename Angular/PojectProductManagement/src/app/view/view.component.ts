import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  constructor(private _taskService: TaskService) { }
  products = this._taskService.products;
  ngOnInit() {
    let products = this._taskService.products;
  }
  onDelete(title?){
    const idx = this.products.indexOf(title);
    this.products.splice(idx, 1);
  }

}

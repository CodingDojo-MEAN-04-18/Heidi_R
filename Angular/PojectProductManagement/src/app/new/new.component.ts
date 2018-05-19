import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/task.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  newproduct = {
    title: "",
    price: "",
    url: ""
  }
  constructor(private _taskService: TaskService, private router: Router) { }
  onSubmit(form){
    this._taskService.products.push(this.newproduct)
    console.log(this._taskService.products)
    this.newproduct = {
      title: "",
      price: "",
      url: ""
    }
    this.router.navigate(['','view'])   
    
  }
  ngOnInit() {
  }

}

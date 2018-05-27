import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  response;
  player =  {
    name: "",
    position: "",
  }
  constructor(private _taskService: TaskService) { }
  onSubmit(){
    console.log("player",this.player)
    this._taskService.addPlayers(this.player).subscribe(
      data =>{
        this.response = data
      }
    )
    this.player = {
      name: "",
      position: "",
    }
  }

  ngOnInit() {
  }

}

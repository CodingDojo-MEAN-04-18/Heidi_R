import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-game-two',
  templateUrl: './game-two.component.html',
  styleUrls: ['./game-two.component.css']
})
export class GameTwoComponent implements OnInit {
  players: any[] = [];
  constructor(private _taskService: TaskService) { }

  changePlay(status, num, id){
    this._taskService.changeStatus(status, num, id)
  }
  ngOnInit() {
    this._taskService.data.subscribe(
      data =>{
        if(data.length == 0){//if taskservice.data hasnt been changed yet it returns 0, so then we have to manually get players
          this._taskService.getPlayers().subscribe(
            data =>{
              this.players.push(data)
            }
          )
        }
        else{//taskservice.data changes on modifying data,if length isnt 0, something changed and page needs to update
          this.players = data
        }
      }
    )
  }
}

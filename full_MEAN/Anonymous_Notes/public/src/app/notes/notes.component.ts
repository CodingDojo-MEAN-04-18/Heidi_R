import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  constructor(private _taskService: TaskService) {}
  notes: any = this._taskService.getNotes()
  ngOnInit() {
    this.notes = this._taskService.getNotes().subscribe(
      data =>{
        this.notes = data
      }
    )
  }

}

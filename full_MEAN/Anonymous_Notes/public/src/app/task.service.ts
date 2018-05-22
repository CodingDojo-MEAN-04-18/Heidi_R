import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http:HttpClient) { }
  getNotes(){
    console.log("getting Notes")
    return this.http.get('/notes')
  }
  addNote(note){
    console.log("in addnote", note)
    this.http.post('/addnote',note).subscribe(
      data =>{
        console.log("posted it?")
      }
    )
  }
}

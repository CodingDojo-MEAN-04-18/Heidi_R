import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  x = function(){
    this._http.get('/players').subscribe(  thing =>{
    const tempData = this.data.getValue();
    tempData.pop()
    tempData.push(thing)
    console.log('tempdata:', tempData)
    this.data.next(tempData)
  }
)
  }
  data: BehaviorSubject<any[]> = new BehaviorSubject([])
  constructor(private _http: HttpClient) { }
  deletePlayer(id){
    console.log(typeof(id))
    let arr = {'id': id}
    this._http.post('/delete',arr).subscribe(
      data =>{
        console.log("data is: ",data)
        return data
      }
    )
    this.x()

    
  }
  changeStatus(status, num, id){
    let arr = [status, num, id]
    this._http.post('/update',arr).subscribe(
      data =>{
        return data
      }
    )
    this.x()
  }
  getPlayers(){
    return this._http.get('/players')
  }
  addPlayers(player){
    return this._http.post('/add', player)
  }

}

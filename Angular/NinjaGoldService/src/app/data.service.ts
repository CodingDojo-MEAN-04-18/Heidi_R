import { Injectable, OnInit} from '@angular/core';
import { Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class DataService{
  goldChange: Subject<number> = new Subject<number>();
  gold: number = 0;
  quotes: string[] = [];
  addgold(max,min,place): number{
    let x: number = Math.floor(Math.random() * (max-min)+ min)
    let line: string = "You've earned " + x
    if(place == "casino"){
      let y: number = Math.floor(Math.random() * 2)
      if(y == 1){
        line = "You've lost " + x
        x = -x
      }
    }
    this.gold = this.gold + x;
    this.goldChange.next(this.gold)
    this.quotes.push(line + " gold(s) at the " + place)
    return x 
  }
  constructor() { }
}
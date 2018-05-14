import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  oneArray: number[] = [];
  twoArray: number[] = [];
  constructor() { }
  generateNum(type){
    var x =  Math.floor(Math.random() * 9)
    if(type == "one"){
      this.oneArray.push(x)
    }
    else if(type == "two"){
      this.twoArray.push(x)
      console.log("two array is", this.twoArray)
    }
  }
  returnArray(type): number[] {
    if(type == "one"){
      console.log("one")
      return this.oneArray;
    }
    else if(type == "two"){
      console.log("two")
      console.log(this.twoArray)
      return this.twoArray;
    }
    else{
      console.log("it was else")
    }
  }
}

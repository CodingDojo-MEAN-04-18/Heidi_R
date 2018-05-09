import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  arr = []
  fillArr(){
    for(let i = 0; i < 10; i ++){
      const num = (Math.floor(Math.random() * 2) ) + 1
      if(num == 1){
        this.arr.push('on')
      }
      else if(num == 2){
        this.arr.push('off')
      }
      else{
        console.log("error num isnt 1 or 2")
      }
    }
    console.log(this.arr)
  }
  buttonClick(){
    for(let i =0; i < this.arr.length; i ++){
      if(this.arr[i] == 'on'){
        this.arr[i] = 'off'
      }
      else if(this.arr[i] =='off'){
        this.arr[i] = 'on'
      }
      else{
        console.log("err with arr",i)
      }
    }
    console.log(this.arr)
  }
  ngOnInit(){
    this.fillArr();
  }
}

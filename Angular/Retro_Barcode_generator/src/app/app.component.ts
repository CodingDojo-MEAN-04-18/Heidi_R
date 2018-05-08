import { Component,OnInit } from '@angular/core';
import { concat } from 'rxjs/internal/observable/concat';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  arr = []
  fillArr(){
    const num = (Math.floor(Math.random() * 6) ) + 1
    for (let y = 0; y < 10; y++) {
      const randNum = (Math.floor(Math.random() * 6) ) + 1;
      if (randNum === 1) {
        this.arr.push('Red ');
      } else if (randNum === 2) {
        this.arr.push('Orange ');
      } else if (randNum === 3) {
        this.arr.push('Yellow ');
      } else if (randNum === 4) {
        this.arr.push('Green ');
      } else if (randNum === 5) {
        this.arr.push('Blue ');
      } else if (randNum === 6) {
        this.arr.push('Purple');
      } else if (randNum === 7) {
        this.arr.push('Black');
      }
    }
  }
  ngOnInit() {
    this.fillArr();
  }

}
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-thirdcomponent',
  templateUrl: './thirdcomponent.component.html',
  styleUrls: ['./thirdcomponent.component.css']
})
export class ThirdcomponentComponent implements OnInit {
  newnum = 0
  show = false
  thirdfunc(){
    this.newnum = this.addfunc()
    this.show = true;
  }
  addfunc(){
    var onearr = this._dataService.returnArray("one");
    var twoarr = this._dataService.returnArray("two");
    var x: number = 0
    var y: number = 0
    for(let i: number = 0; i < onearr.length; i ++){
      x = x + onearr[i];
    }
    for(let i: number = 0; i < twoarr.length; i ++){
      y = y + twoarr[i]
    }
    return  x - y;
    
  }
  constructor(private _dataService: DataService) { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { concat } from 'rxjs/internal/observable/concat';

@Component({
  selector: 'app-alpha',
  templateUrl: './alpha.component.html',
  styleUrls: ['./alpha.component.css']
})
export class AlphaComponent implements OnInit {
  genoneArray: number[] = [];
  genOne(){
    this._dataService.generateNum("one")
    this.genoneArray = this._dataService.returnArray("one");
    console.log(this.genoneArray)
  }
  constructor(private _dataService: DataService) { }

  ngOnInit() {
  }

}

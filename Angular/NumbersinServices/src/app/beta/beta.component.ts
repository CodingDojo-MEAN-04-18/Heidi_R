import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-beta',
  templateUrl: './beta.component.html',
  styleUrls: ['./beta.component.css']
})
export class BetaComponent implements OnInit {
  gentwoArray: number[] = [];
  genTwo(){
    this._dataService.generateNum("two")
    this.gentwoArray = this._dataService.returnArray("two")  }
  constructor(private _dataService: DataService) { }

  ngOnInit() {
  }

}

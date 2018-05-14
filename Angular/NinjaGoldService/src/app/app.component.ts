import { Component, OnInit} from '@angular/core';
import { DataService } from 'src/app/data.service';
import { OneComponent } from 'src/app/one/one.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  gold:number =  0;
  constructor(private _dataService: DataService) {
    _dataService.goldChange.subscribe(x => this.gold = x);
  }
  ngOnInit(){
    this.gold = this._dataService.gold;
  }
}

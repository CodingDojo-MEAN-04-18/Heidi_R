import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {
  quotes: string[] = this._dataService.quotes
  constructor(private _dataService: DataService) { }
  ngOnInit() {
  }

}

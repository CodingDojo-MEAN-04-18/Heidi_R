import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { COMPILER_OPTIONS } from '@angular/core/src/linker/compiler';
import { concat } from 'rxjs/internal/observable/concat';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {
  Explore(type){
    if(type == "house"){
      this._dataService.addgold(7,16,"house")
    }
    else if(type == "cave"){
      this._dataService.addgold(5,11,"cave")
    }
    else if(type == "farm"){
      this._dataService.addgold(2,6,"farm")
    }
    else if(type == "casino"){
      this._dataService.addgold(0,101,"casino")
    }
    else{
      console.log("it was else")
    }
  }
  constructor(private _dataService: DataService) { }

  ngOnInit() {
  }

}

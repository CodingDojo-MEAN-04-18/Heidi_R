import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/task.service';
import { ActivatedRoute,Router } from '@angular/router';
import { RouterInitializer } from '@angular/router/src/router_module';
import { RouterLink } from '@angular/router/src/directives/router_link';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
 Id;
 product;
  constructor(private _route: ActivatedRoute,private _taskService: TaskService, private router: Router) {
    this._route.paramMap.subscribe( params => {
      console.log(params.get('id'));
      this.Id = params.get("id")
 })
 for(let product of this._taskService.products){
  if(product.title == this.Id){
    this.product = product
    break;
  }
}
   }
   onSubmit(form){
    this.router.navigate(['','view'])   
   }
  

  ngOnInit() {
  }

}

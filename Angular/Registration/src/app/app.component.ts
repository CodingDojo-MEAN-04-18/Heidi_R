import { Component } from '@angular/core';
@Component({ 
  selector: 'app-root', 
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
visible = false
  user ={
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    street: "",
    city: "",
    state: "",
    unit: "",
    lucky: "",
  }
  users = [];
  onSubmit(){
    this.visible = true
    this.users.push(this.user)
    console.log(this.user, this.users);
  }
}
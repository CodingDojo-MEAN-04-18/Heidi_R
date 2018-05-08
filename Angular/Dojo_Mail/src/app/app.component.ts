import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app'
  users = [
    {
      email: "billgates@gmail.com",
      importance:true,
      subject: "New Windows",
      content: "stuff"
    },
    {
      email: "someguy@gmail.com",
      importance:false,
      subject: "surfing",
      content: "waves"
    },
    {
      email: "johndoe@gmail.com",
      importance:true,
      subject: "default character",
      content: "form example"
    },
    {
      email: "Robin Williams",
      importance:true,
      subject: "his death",
      content: "was it really a suicide?"
    }
  ]

}
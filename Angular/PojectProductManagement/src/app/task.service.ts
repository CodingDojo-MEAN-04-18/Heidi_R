import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  products = [
    {
      title: "whatever",
      price: "12.99",
      url: "My name is url"
    }
  ]
  constructor() { }
}

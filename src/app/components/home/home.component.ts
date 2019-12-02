import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'AFCE';
  intro = 'This is an example of Crud operations using Angular 8 / Firebase';
  author = 'ZAYANI Mehdi Salim';
  website = 'https://zms.techza.fr';
  description = 'With this app you can perform classic oprations like ADD, LIST, UPDATE, DELETE, on a list of movies';
  constructor() { }

  ngOnInit() {
  }

}

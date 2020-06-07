import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'soretrak-platform-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  title = 'my-app';

  name = 'Hello my company SORETRAK';

  constructor() {}

  ngOnInit(): void {}
}

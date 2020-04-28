import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent implements OnInit {

  logs: {
    id: string,
    text: string,
    date: any
  }[];

  constructor() { }

  ngOnInit() {
    this.logs = [
      {id:'1', text: 'hello', date: new Date('12/26/2019 12:45:34')},
      {id:'2', text: 'added bootstrap', date: new Date('12/27/2019 10:15:24')},
      {id:'3', text: 'added logs', date: new Date('12/28/2019 5:13:34')}
    ]
  }

}

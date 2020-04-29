import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Observable } from 'rxjs';
import { of } from 'rxjs';

import { Log } from '../models/Log';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  logs:Log[];

  private logSource = new BehaviorSubject<Log>({id: null, text: null, date: null});
  selectedLog = this.logSource.asObservable();


  constructor() {   this.logs = [
    {id:'1', text: 'hello', date: new Date('12/26/2019 12:45:34')},
    {id:'2', text: 'added bootstrap', date: new Date('12/27/2019 10:15:24')},
    {id:'3', text: 'added logs', date: new Date('12/28/2019 5:13:34')}
  ] }

getLogs(){
  return this.logs;
}

setFormLog(log: Log) {
  this.logSource.next(log);
}
}

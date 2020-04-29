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

  
  private stateSource = new BehaviorSubject<boolean>(true);
  stateClear = this.stateSource.asObservable();

  constructor() {   
  //   this.logs = [
  //   {id:'1', text: 'hello', date: new Date('12/26/2019 12:45:34')},
  //   {id:'2', text: 'added bootstrap', date: new Date('12/27/2019 10:15:24')},
  //   {id:'3', text: 'added logs', date: new Date('12/28/2019 5:13:34')}
  // ] 
  this.logs = [];
}

getLogs(): Observable<Log[]>{
if(localStorage.getItem('logs') === null){
  this.logs = [];
} else {
  this.logs = JSON.parse(localStorage.getItem('logs'));

}

  return of(this.logs.sort((a,b) => {
    return b.date = a.date;
  }));
}

setFormLog(log: Log) {
  this.logSource.next(log);
}

addLog(log: Log) {
  this.logs.unshift(log);

  // Added to local storage 
  localStorage.setItem('logs', JSON.stringify(this.logs));
}

updateLog(log: Log){
  this.logs.forEach((curr, index)=> {
    if(log.id === curr.id){
      this.logs.splice(index, 1);
    }
  });
  this.logs.unshift(log);

  //update local storage
  localStorage.setItem('logs', JSON.stringify(this.logs));
}


deleteLog(log: Log){
  this.logs.forEach((curr, index)=> {
    if(log.id === curr.id){
      this.logs.splice(index, 1);
    }
  });

  //delete from local storage
  localStorage.setItem('logs', JSON.stringify(this.logs));
}

clearState() {
  this.stateSource.next(true);
}
}



import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataBaseService {

  constructor() { }
  sendData() {
    return[
      {id: 1, userName: 'someThing', password: 'someTHing' },
      {id: 2, userName: 'someThing2', password: 'someTHing2' },
      {id: 3, userName: 'someThing3', password: 'someTHing3' },
    ];
  }
}

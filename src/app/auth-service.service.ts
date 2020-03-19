import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService   {

  constructor() { }
  checkUserName(uname: string) {
    const savedEmail = JSON.parse(localStorage.getItem('newName'));
    // tslint:disable-next-line:triple-equals
    if (uname == savedEmail ) {
      console.log(name);
      return true;
    } else {
      return false;
    }
  }
}

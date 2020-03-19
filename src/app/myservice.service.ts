import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';
import {makeBindingParser} from '@angular/compiler';
import * as firebase from 'firebase/app';

/*class postObject {
  title: string;
}*/

@Injectable({
  providedIn: 'root'
})

export class MyserviceService {
  constructor( private httpclientService: HttpClient) { }
  getMethod(): Observable <object> {
    const header = new HttpHeaders({
      name: ' devesh'
    });
    const paramsa = new HttpParams().append('age', '100');
    // tslint:disable-next-line:max-line-length
    return this.httpclientService.get('https://medium.com/simars/create-generic-angular-pipes-apply-and-applypure-b5dc0464ff0d', { headers: header , params: paramsa })
      .pipe(
        tap(response => console.log(response)),
      /*  map(respone => respone.headers),*/
        catchError(this.handleError)
      );
  }

  postMethod(postId): Observable<object> {
    return this.httpclientService.post<object>('http://jsonplaceholder.typicode.com/users',  postId );
  }
handleError(error: HttpErrorResponse) {
    return throwError(error);
  }
}

import {Component, Inject, OnInit} from '@angular/core';
import { TemplateDrivenForms} from '../template-driven-forms';
import {NgForm} from '@angular/forms';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {DataBaseService} from '../data-base.service';
import {Router} from '@angular/router';
import {AuthServiceService} from '../auth-service.service';
import * as firebase from 'firebase';
import {FireBaseAuthService} from '../fire-base-auth.service';
import {AuthService} from '../auth1/auth.service';
import {auth} from 'firebase';
import {MyserviceService} from '../myservice.service';


@Component({
  selector: 'app-from-control',
  templateUrl: './from-control.component.html',
  styleUrls: ['./from-control.component.css']
})

export class FromControlComponent implements OnInit {
  constructor(private http: HttpClient, private databaseS: DataBaseService, private routes: Router,
              private authservice: AuthServiceService, public finalUse: AuthService, public forHttpData: MyserviceService) {
    this.dataFromDataBase = JSON.stringify(this.databaseS.sendData());
    this.value = JSON.parse(this.dataFromDataBase);
  }
    postId = {
    title: 'at nam consequatur ea labore ea harum',
  };
  value;
  private msg: string;
  model = new TemplateDrivenForms();
  httpData;
  errorMsg;
  dataFromDataBase: string;
  private value1;
  ngOnInit() {
    // @ts-ignore
   /* this.http.get('http://jsonplaceholder.typicode.com/users')
      .subscribe((data) => {
          this.httpData = data;
        },
        // tslint:disable-next-line:no-shadowed-variable
        error => this.errorMsg = error);
   */ /* this.forHttpData.getMethod().subscribe((data) => {
       console.log(data[0]);
     });*/

  }

  doLogin() {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(this.model.userName, this.model.password)
        .then(res => {
          resolve(res);
        }, err => reject(err));
    });
  }

  resetPassword() {
    this.routes.navigate(['/resetPassword']);
  }

  onSubmit(formControl: NgForm) {
    //  const output = this.authservice.checkUserName(this.model.userName);
    /* if (output === true) {
       this.routes1.navigate(['/directiveExample']);
     } else {
       this.msg = 'Invalid username or password';
     }*/
    this.doLogin()
      .then(res => {
        this.routes.navigate(['/uploadImage']);
      }, err => {
        console.log(err);
        alert(err);
        this.errorMsg = err.message;
      });
    this.forHttpData.postMethod(this.postId).subscribe((postId ) => console.log(postId));
  }
}

import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {DirectiveChildComponent} from '../directive-child/directive-child.component';
import * as firebase from 'firebase';
import {AngularFireAuth} from '@angular/fire/auth';
import {Location} from '@angular/common';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';

class  Customer {

  id: number;

  name: string;

  email: string;

  tel: string;

}

interface Course {
  confirmpassword1: string;
  email1: string;
  firstname: string;
  lastname: string;
  password1: string;
}

@Component({
  selector: 'app-directive-example',
  templateUrl: './directive-example.component.html',
  styleUrls: ['./directive-example.component.css']
})
export class DirectiveExampleComponent implements OnInit {
  constructor(private routes: Router, public db: AngularFireDatabase, public angularFireAuth: AngularFireAuth,
              private location: Location, private http: HttpClient) {
    this.db.list('/user/', ref =>
      ref.limitToFirst(50)).snapshotChanges().subscribe(form => {
      this.form = form;
    });
    const defaultAuth = firebase.auth();
    this.checkWidth();
    this.something = JSON.stringify(this.form);
    console.log(this.something);
  }
  screenWidth: string;
  i;
  customersObservable: Observable<Customer[]>;
  courses$: Observable<Course[]>;
  dtata: {};
  form: any[];
  something;
  firstNameChange ;
  // @ts-ignore
  @ViewChild(DirectiveChildComponent) child;
  name = 'devesh';
  active = true;
  public firstClass = 'classBackgroundColor';
  public secondClass = 'classTextColor';
  public thirdClass = 'classAlign';
  public TestMethod = {
    firstClass: false,
    secondClass: false,
    thirdClass: false,
  };
  changeValue;
  public Stylemodel = {
    color: 'blue',
    fontStyle: 'italic'
  };
  msg: string;
  message = 'parent';
  mesg;
  userValues = firebase.auth().currentUser;
  input = false;
  subject = new Subject<string>();
  keyForChange;

  parentMessage() {
    return this.message;
  }

  ngOnInit() {
    /* this.courses$ = this.http
       .get<Course[]>('/user/');
     console.log(this.courses$);
     this.courses$.subscribe((data) => this.dtata = data);
     console.log(this.dtata);*/

  }

  /*ngAfterViewInit() {
   this.name = 'angular';
   console.log(this.name);
   this.msg = this.child.message;
  }*/

  functionOnWhichRedirectionShouldHappen() {
    this.routes.navigate(['/reactiveFrom']);
  }

  receiveMessage(event) {
    this.mesg = event;
  }

  doLogout() {
    return new Promise((resolve, reject) => {
      if (firebase.auth().currentUser) {
        this.angularFireAuth.auth.signOut();
        resolve();
      } else {
        reject();
      }
    });
  }

  logOutFunction() {
    this.doLogout().then((res) => {
      this.routes.navigate(['/fromControl']);
    }, (error) => {
      alert(error);
    });
  }

  deleteItem(a) {
    return this.db.list('/user/' + a).remove();
  }
  updateItem(a) {
    this.keyForChange = a;
    this.input = true;
  }

  updateItemOne(a) {
    return this.db.list('/user/').update(a, {
      firstname: this.firstNameChange,
     /* email1: this.emailChange,
      firstname: this.firstNameChange,
      lastname: this.lastNameChange,
      password1: this.passwordChange,*/
    });
    this.firstNameChange = null ;
    this.input = false;
  }

  httpPostExample() {

    // tslint:disable-next-line:max-line-length
    this.http.post('http://127.0.0.1:3000/customers/1',
      {
        confirmpassword1: '123456',
        email1: 'rew22@gmail.com',
        firstname: 'demmn.vegffgjfgjffdgggjgfghsh1',
        lastname: 'agarwmn.mngdgfgjgjfgjfgjdddfggf.al1',
        password1: '123456dfdfhdfhd7777777777777777777777fh'
      })
      .subscribe(
        (val) => {
          console.log('POST call successful value returned in body',
            val);
        },
        response => {
          console.log('POST call in error', response);
        },
        () => {
          console.log('The POST observable is now completed.');
        });
  }

  trySubjectFunction() {
    this.subject.subscribe((subData) => console.log(subData) );
    this.subject.subscribe((data) => console.log(data));
    this.subject.next('devesh12');
    this.subject.next('devesh45');
  }

  onMobileChange(status: boolean) {
    return  status;
  }

  public checkWidth() {
    const width = window.innerWidth;
    if (width <= 768) {
      this.screenWidth = 'sm';
      this.onMobileChange(true);
    } else if (width > 768 && width <= 992) {
      this.screenWidth = 'md';
      this.onMobileChange(false);
    } else {
      this.screenWidth = 'lg';
      this.onMobileChange(false);
    }
  }
}

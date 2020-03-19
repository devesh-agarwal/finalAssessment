import {Component, HostListener, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, } from '@angular/forms';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';
import {Router, Routes} from '@angular/router';
import {AngularFireDatabaseModule } from 'angularfire2/database';
import {AngularFireDatabase } from '@angular/fire/database';
import * as firebase from 'firebase';
import {Observable} from 'rxjs';

export class MyErrorStateMatcherPassword implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const invalidCtrl = !!(control && control.invalid && control.parent.dirty);
    const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);
    return (invalidCtrl || invalidParent);  }
}
@HostListener('window:resize', ['$event'])
@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})

export class ReactiveFormsComponent implements OnInit  {
  constructor(private formBuilderInstance: FormBuilder ,  @Inject(LOCAL_STORAGE) private storage: WebStorageService ,
              private routes: Router, public db: AngularFireDatabase) {  }
  errorMessage;
  successMessage;
  profileForm: FormGroup;
  passwordChecker: FormGroup;
  passwordMatcher = new MyErrorStateMatcherPassword();
  private inputEntries: string;
  formValueObject = {};
  ngOnInit() {
     this.profileForm = this.formBuilderInstance.group ({
        firstName: ['', { Validators : Validators.required}],
        lastName: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
        email: ['', [Validators.required, Validators.email ]],
        passwordChecker : this.formBuilderInstance.group({
         password: ['', {Validators: Validators.required } ] ,
         confirmPassword: ['', {Validators: [ Validators.required , Validators.minLength(6)] }]  },
          { validator: this.checkPasswords })
      },
    );
     const key = 'name';
     localStorage.setItem(key, 'devesh@gmail.com');
     const myItem = localStorage.getItem(key);
     console.log(myItem);
  }

  myMethod() {
    return this.formValueObject = { firstname: this.profileForm.get('firstName').value,
    lastname: this.profileForm.get('lastName').value,
    email1: this.profileForm.get('email').value,
    password1: this.profileForm.controls.passwordChecker.get('password').value,
    confirmpassword1: JSON.parse(this.profileForm.controls.passwordChecker.get('confirmPassword').value)}; }
  onSubmit() {
    console.log(this.profileForm);
    const key = 'newName';
    localStorage.setItem(key, JSON.stringify(this.profileForm.get('email').value));
    const getData = JSON.parse(localStorage.getItem(key));
    console.log(getData);
    this.doRegister().then(res => {console.log(res);
                                   this.errorMessage = ' ';
                                   this.successMessage = 'your account created';
    },                                       err => {console.log(err);
                                                     this.errorMessage = err.message;
                                                     this.successMessage = '';
                                                     alert(err);
    });
    const objectForPushingData = this.db.database.ref('/user');
    objectForPushingData.push(this.myMethod());
  }
  doRegister() {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(JSON.parse(JSON.stringify(this.profileForm.get('email').value)) ,
        (JSON.parse(JSON.stringify(this.profileForm.controls.passwordChecker.get('password').value))))
        .then(res => {
          resolve(res);
          this.routes.navigate(['/directiveExample']);
        }, err => reject(err));
    });
  }
  checkPasswords(group: FormGroup) {
     const pass = group.get('password').value;
     const confirmPass = group.get('confirmPassword').value;
     return pass === confirmPass ? null : { notSame: true };
  }
  onResize(event) {
   return  event.target.innerWidth;
  }
}


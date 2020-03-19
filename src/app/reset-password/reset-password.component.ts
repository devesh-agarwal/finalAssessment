import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  userName: string;

  constructor() {}
  ngOnInit() {}
  resetPassword() {
    firebase.auth().sendPasswordResetEmail(this.userName).then(() => { alert('Link Sent To Email'); })
      .catch((error) => alert(error));
  }
}

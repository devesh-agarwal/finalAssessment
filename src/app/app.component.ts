import {Component, HostListener, OnInit} from '@angular/core';
import { MyserviceService } from '../app/myservice.service';
import { FormGroup, FormControl, Validators} from '@angular/forms';
// @ts-ignore
import {AngularFireDatabase , FirebaseListObservable} from 'angularfire2/database';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  form: any[];
  name = new FormControl('');
  constructor(public db: AngularFireDatabase) {
    db.list('/form').valueChanges().subscribe(form => this.form = form);
  }

    ngOnInit() { console.log(this.form); }
  onClickSubmit(data) {
    alert('Entered Email id : ' + data.emailid);
  }
  updateName() {
    this.name.setValue('Nancy');
  }
  onResize(event) {
    return event.target.innerWidth;
  }
}

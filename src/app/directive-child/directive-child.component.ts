import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import * as firebase from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import { Location } from '@angular/common';
import {Observable, Observer} from 'rxjs';
@Component({
  selector: 'app-directive-child',
  templateUrl: './directive-child.component.html',
  styleUrls: ['./directive-child.component.css']
})
export class DirectiveChildComponent implements OnInit {
  message = 'from child';
  constructor(  ) { }
  @Input() childMessage: string;

  @Output() messageEvent = new EventEmitter<string>();
  ngOnInit() {
  }
  sendMessage() {
    this.messageEvent.emit(this.message);
  }
}

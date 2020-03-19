import { Component, OnInit } from '@angular/core';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';
import {Observable} from 'rxjs';
@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent implements OnInit {
  constructor(private afStorage: AngularFireStorage) {
  }
  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  downloadURL: Observable<string>;
  url;
a;
  ngOnInit() { }
  upload(event) {
    const id = Math.random().toString(36).substring(2);
    this.ref = this.afStorage.ref(id);
    this.task = this.ref.put(event.target.files[0]);
  }
  getImage() {
    this.downloadURL = this.ref.getDownloadURL();
    this.downloadURL.subscribe(url =>  { this.url = url;
                                         console.log(this.url);
                                         return this.url;
    } );

  }

}

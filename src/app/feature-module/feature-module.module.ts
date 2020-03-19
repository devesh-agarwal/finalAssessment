import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NewModuleComponentComponent} from '../new-module-component/new-module-component.component';
import {RouterModule} from '@angular/router';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {StorageServiceModule} from 'angular-webstorage-service';
import {AngularFireAuthModule} from 'angularfire2/auth';



@NgModule({
  declarations: [NewModuleComponentComponent],
  imports: [
    CommonModule,
    RouterModule

  ],
  exports: [NewModuleComponentComponent]
})
export class FeatureModuleModule { }

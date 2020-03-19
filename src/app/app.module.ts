import {BrowserModule } from '@angular/platform-browser';
import {NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule } from './app-routing.module';
import {MatSliderModule } from '@angular/material/slider';
import {MyserviceService } from './myservice.service';
import {AppComponent } from './app.component';
import {ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DirectiveExampleComponent } from './directive-example/directive-example.component';
import {CustomDirectivesDirective } from './custom-directives.directive';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {FromControlComponent } from './from-control/from-control.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {AngularFireModule } from 'angularfire2';
import {AngularFireDatabaseModule } from 'angularfire2/database';
import { ErrorStateMatcher } from '@angular/material/core';
import {environment} from '../environments/environment';
import {HttpClientModule } from '@angular/common/http';
import {DataBaseService} from './data-base.service';
import {StorageServiceModule} from 'angular-webstorage-service';
import {AuthGuard} from './auth-guard.guard';
import {AuthServiceService} from './auth-service.service';
import {FireBaseAuthService} from './fire-base-auth.service';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {AuthService} from './auth1/auth.service';
import { DirectiveChildComponent } from './directive-child/directive-child.component';
import {CustomPipe} from './customPipe';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import {FeatureModuleModule} from './feature-module/feature-module.module';
import { UploadImageComponent } from './upload-image/upload-image.component';
import { AngularFireStorageModule } from 'angularfire2/storage';
import {FlexLayoutModule} from '@angular/flex-layout';
import { FlexComponentComponent } from './flex-component/flex-component.component';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';


@NgModule({
  declarations: [
    AppComponent,
    CustomPipe,
    ReactiveFormsComponent,
    DirectiveExampleComponent,
    CustomDirectivesDirective,
    FromControlComponent,
    DirectiveChildComponent,
    ResetPasswordComponent,
    UploadImageComponent,
    FlexComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatSliderModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatCheckboxModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule, AngularFireAuthModule,
    FeatureModuleModule, AngularFireStorageModule, FlexLayoutModule
  ],
  // tslint:disable-next-line:max-line-length
  providers: [MyserviceService,  AuthGuard,
    {provide: ErrorStateMatcher, useClass: ErrorStateMatcher}, DataBaseService, AuthServiceService, FireBaseAuthService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

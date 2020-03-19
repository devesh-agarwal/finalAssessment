import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FromControlComponent} from './from-control/from-control.component';
import {ReactiveFormsComponent} from './reactive-forms/reactive-forms.component';
import {ResetPasswordComponent} from './reset-password/reset-password.component';
import {DirectiveExampleComponent} from './directive-example/directive-example.component';
import {AuthGuard} from './auth-guard.guard';
import {NewModuleComponentComponent} from './new-module-component/new-module-component.component';
import {UploadImageComponent} from './upload-image/upload-image.component';



const appRoutes: Routes = [
  { path: 'fromControl', component: FromControlComponent },
  { path: 'reactiveFrom', component : ReactiveFormsComponent },
  { path: 'newModuleComopnent', component: NewModuleComponentComponent },
  { path: 'resetPassword', component : ResetPasswordComponent },
  { path: 'uploadImage', component : UploadImageComponent },
  { path: 'directiveExample', component : DirectiveExampleComponent , canActivate: [AuthGuard] },
  { path: '* *' , redirectTo: '/' }
] ;

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

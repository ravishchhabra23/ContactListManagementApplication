import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '../common/common.module';
import { HttpModule } from '@angular/http';
import {FormsModule} from '@angular/forms';
import { UserAppComponent } from './components/main/app.component';
import{UserLoginComponent} from './components/login/app.login.component';
import{UserLogoutComponent} from './components/logout/app.logout.component';
import{UserContactCreateComponent} from './components/contacts/user.contact.create.component';
import{UserContactDetailsComponent} from './components/contacts/user.contact.details.component';
import{UserRegisterComponent} from './components/register/user.register.component';
import {UserContactMenuComponent} from './components/menu/contactmenu.component';

import {userrouting,userRoutingProviders} from './routes/app.user.routes';
import {UserService} from './services/user/user.service'


@NgModule({
  declarations: [UserAppComponent,UserLoginComponent,UserLogoutComponent,UserContactCreateComponent,
  UserContactDetailsComponent,UserRegisterComponent,UserContactMenuComponent],
  imports: [BrowserModule,CommonModule,HttpModule,FormsModule,userrouting],
  providers: [userRoutingProviders,UserService],
  bootstrap: [UserAppComponent]
})
export class UserModule { }

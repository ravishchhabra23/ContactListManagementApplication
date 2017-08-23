import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {FormsModule} from '@angular/forms'
import { CommonModule } from '../common/common.module';


import { AdminAppComponent } from './components/main/app.main.component';
import{AdminLoginComponent} from './components/login/app.login.component';
import{AdminLogoutComponent} from './components/logout/app.logout.component';
import{AdminUserCreateComponent} from './components/users/app.user.create.component';
import{AdminHomeComponent} from './components/home/admin.home.component';
import{AdminUserDetailsComponent} from './components/userdetails/app.userdetails.component';
import{AdminUserMenuComponent} from './components/usermenu/usermenu.component';

import {adminrouting,adminRoutingProviders} from './routes/app.admin.routes';
import {UserAdminService} from './services/user/user.service.component';
import {CustomDatePipe} from '../common/pipes/date/date.pipe';

@NgModule({
  imports: [BrowserModule,CommonModule,HttpModule,FormsModule,adminrouting],
  declarations: [AdminAppComponent,AdminHomeComponent,AdminLoginComponent,
    AdminLogoutComponent,AdminUserCreateComponent,AdminUserDetailsComponent,AdminUserMenuComponent],
  providers: [adminRoutingProviders,UserAdminService],
  bootstrap: [AdminAppComponent]
})
export class AdminModule { }

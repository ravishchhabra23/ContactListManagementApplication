import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { TabsModule } from 'ng2-bootstrap';
import {RouterModule} from '@angular/router';
//importing application modules
import {AdminModule} from './admin/admin.module';
import {CommonModule} from './common/common.module';
import {UserModule} from './user/user.module';

import { AppComponent } from './main/components/main/app.component';
import { HomeComponent } from './main/components/home/app.home.component';
import{CommonErrorComponent} from './main/components/error/error.component'
import {appRoutingProviders,routing} from './main/routes/app.routes'
//import { HomeComponent } from './main/components/home/app.home.component';

@NgModule({
  declarations: [AppComponent,HomeComponent,CommonErrorComponent],
  imports: [BrowserModule,HttpModule,FormsModule,AdminModule,UserModule,CommonModule,routing,TabsModule.forRoot()],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }

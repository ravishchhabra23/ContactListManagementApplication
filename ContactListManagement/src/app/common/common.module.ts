import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
//serice imports
import {ApiConfigService} from './services/config/config.service';
import {HttpProvider} from './services/http/http.service';
import {CommonsObjectsService} from './services/object/object.service';
import {RestApisService} from './services/restapi/restapi.service';
import {EventService} from './services/event/event.component';

import { CommonMainComponent} from './components/main/app.main.component';
import {NavListComponent } from './components/navigation/list/nav.list.component';
import { NavigationMainComponent} from './components/navigation/main/nav.main.component';
import { NavsearchComponent} from './components/navigation/search/nav.search.component';
import { CommonLoginComponent} from './components/login/login.component';
import { CommonRegisterComponent} from './components/register/register.component';
import {PagerService} from './services/pager/pager.service';
import {FilterPipe} from './pipes/filter/filterpipe.pipe';
import {CustomDatePipe} from './pipes/date/date.pipe';
import {AlertDirective} from '../common/directives/alert.directive'
import {commonsrouting,commonsRoutingProviders} from './routes/app.common.routing';

@NgModule({
  declarations: [CommonMainComponent,NavListComponent,NavigationMainComponent,
    NavsearchComponent,CommonLoginComponent,CommonRegisterComponent,FilterPipe,AlertDirective,CustomDatePipe],
  imports: [BrowserModule,FormsModule,commonsrouting],
  providers: [ApiConfigService,HttpProvider,CommonsObjectsService,RestApisService,EventService
    ,commonsRoutingProviders,FilterPipe,PagerService,CustomDatePipe],
  exports:[CommonMainComponent,NavListComponent,NavigationMainComponent
    ,NavsearchComponent,commonsRoutingProviders,CommonLoginComponent,
    CommonRegisterComponent,AlertDirective,FilterPipe,CustomDatePipe],
  bootstrap: []
})
export class CommonModule { }

import { TestBed, async,inject,ComponentFixture } from '@angular/core/testing';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import { UserAppComponent } from './app.component';
import {Http} from '@angular/http';
import {Router} from '@angular/router';
import {EventService} from '../../../common/services/event/event.component';
import {CommonsObjectsService} from '../../../common/services/object/object.service'
import {UserService} from '../../services/user/user.service'
import {MockComponent,RouterStub} from '../../../mock/app.mockcomponent';
import {ApiConfigService} from '../../../common/services/config/config.service';
import { MockBackend } from '@angular/http/testing';
import {HttpProvider} from '../../../common/services/http/http.service';

describe('UserAppComponent', () => {

   let commonObjectService = null;
  
   let userAdminService = null;
   let router = null;
   let eventservice = null;

    beforeEach(() => {
  TestBed.configureTestingModule({
    declarations: [
        UserAppComponent,
        MockComponent({ selector: 'nav-main' }),
        MockComponent({ selector: 'nav-list' }),
        MockComponent({ selector: 'nav-search' })
      ],
      providers:[{provide:Http,deps:[MockBackend]},
        {provide: HttpProvider, useClass: HttpProvider},
        {provide: ApiConfigService, useClass: ApiConfigService},
        {provide: CommonsObjectsService, useClass: CommonsObjectsService},
        {provide: Router, useClass: RouterStub},
        {provide: UserService, useClass: UserService},
        {provide: EventService, useClass: EventService},
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
  });
});

     beforeEach(inject([CommonsObjectsService,UserService,Router]
    ,(_commonObjectService: CommonsObjectsService,_eventService:EventService,
     _userService: UserService,
     _router: Router,
     _objectService: CommonsObjectsService) => {
   commonObjectService = _commonObjectService;
   eventservice = _eventService;
   userAdminService=_userService;
   router=_router
  }));

  it('Instance created for User Main component', async(() => {
    const fixture = TestBed.createComponent(UserAppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  }));
});



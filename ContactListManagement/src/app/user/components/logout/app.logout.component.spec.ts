import { TestBed, async,inject,ComponentFixture } from '@angular/core/testing';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import { UserLogoutComponent } from './app.logout.component';
import {Router} from '@angular/router';
import {HttpProvider} from '../../../common/services/http/http.service';
import {Http} from '@angular/http';
import {EventService} from '../../../common/services/event/event.component';
import {ApiConfigService} from '../../../common/services/config/config.service';
import {RestApisService} from '../../../common/services/restapi/restapi.service';
import {CommonsObjectsService} from '../../../common/services/object/object.service'
import {UserService} from '../../services/user/user.service'
import { CommonLoginComponent} from '../../../common/components/login/login.component';
import {MockComponent,RouterStub} from '../../../mock/app.mockcomponent';
import { MockBackend } from '@angular/http/testing';

describe('UserLogoutComponent', () => {

   let commonObjectService = null;
   let apiService = null;
   let userAdminService = null;
   let router = null;
   let restapiService = null;
   let url: string = '/admin/login';

    beforeEach(() => {
  TestBed.configureTestingModule({
    declarations: [
        UserLogoutComponent,
        MockComponent({ selector: 'nav-main' }),
        MockComponent({ selector: 'nav-list' }),
        MockComponent({ selector: 'nav-search' })
      ],
      providers:[{provide:Http,deps:[MockBackend]},
      {provide: RestApisService, useClass: RestApisService},
        {provide: CommonsObjectsService, useClass: CommonsObjectsService},
        {provide: HttpProvider, useClass: HttpProvider},
        {provide: ApiConfigService, useClass: ApiConfigService},
        {provide: Router, useClass: RouterStub},
        {provide: UserService, useClass: UserService},
        {provide: EventService, useClass: EventService},
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
  });
});

     beforeEach(inject([CommonsObjectsService,RestApisService,ApiConfigService,UserService,Router]
    ,(_commonObjectService: CommonsObjectsService,_config: ApiConfigService,
      _restAPiService:RestApisService,
     _userService: UserService,
     _router: Router,
     _objectService: CommonsObjectsService) => {
   commonObjectService = _commonObjectService;
   apiService = _config;
   userAdminService=_userService;
   router=_router
   restapiService=_restAPiService;
  }));

  it('Instance created for logout', async(() => {
    const fixture = TestBed.createComponent(UserLogoutComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  }));
});



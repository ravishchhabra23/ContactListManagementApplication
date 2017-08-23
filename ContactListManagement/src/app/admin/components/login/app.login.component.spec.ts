import { TestBed, async,inject,ComponentFixture } from '@angular/core/testing';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import { AdminLoginComponent } from './app.login.component';
import {Router} from '@angular/router';
import {HttpProvider} from '../../../common/services/http/http.service';
import {Http} from '@angular/http';
import {EventService} from '../../../common/services/event/event.component';
import {ApiConfigService} from '../../../common/services/config/config.service';
import {CommonsObjectsService} from '../../../common/services/object/object.service'
import {UserAdminService} from '../../services/user/user.service.component'
import { CommonLoginComponent} from '../../../common/components/login/login.component';
import {MockComponent,RouterStub} from '../../../mock/app.mockcomponent';
import { MockBackend } from '@angular/http/testing';

describe('AdminLoginComponent', () => {

   let commonObjectService = null;
   let apiService = null;
   let userAdminService = null;
   let router = null;
   let url: string = '/admin/login';

    beforeEach(() => {
  TestBed.configureTestingModule({
    declarations: [
        AdminLoginComponent,
        MockComponent({ selector: 'common-login',inputs:['url'] }),
        MockComponent({ selector: 'nav-main' }),
        MockComponent({ selector: 'nav-list' }),
        MockComponent({ selector: 'nav-search' })
      ],
      providers:[{provide:Http,deps:[MockBackend]},
        {provide: CommonsObjectsService, useClass: CommonsObjectsService},
        {provide: HttpProvider, useClass: HttpProvider},
        {provide: ApiConfigService, useClass: ApiConfigService},
        {provide: Router, useClass: RouterStub},
        {provide: UserAdminService, useClass: UserAdminService},
        {provide: EventService, useClass: EventService},
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
  });
});

     beforeEach(inject([CommonsObjectsService,ApiConfigService,UserAdminService,Router]
    ,(_commonObjectService: CommonsObjectsService,_config: ApiConfigService,
     _userService: UserAdminService,
     _router: Router,
     _objectService: CommonsObjectsService) => {
   commonObjectService = _commonObjectService;
   apiService = _config;
   userAdminService=_userService;
   router=_router
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AdminLoginComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  }));
});



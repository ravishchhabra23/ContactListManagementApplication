import { TestBed, async,inject,ComponentFixture } from '@angular/core/testing';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import { UserContactDetailsComponent } from './user.contact.details.component';
import {Router} from '@angular/router';
import {HttpProvider} from '../../../common/services/http/http.service';
import {Http,BaseRequestOptions,XHRBackend} from '@angular/http';
import {EventService} from '../../../common/services/event/event.component';
import {ApiConfigService} from '../../../common/services/config/config.service';
import {RestApisService} from '../../../common/services/restapi/restapi.service';
import {CommonsObjectsService} from '../../../common/services/object/object.service'
import {UserService} from '../../services/user/user.service'
import {MockComponent,RouterStub} from '../../../mock/app.mockcomponent';
import { MockBackend } from '@angular/http/testing';

import {CommonModule} from 'app/common/common.module';

describe('UserContactDetailsComponent', () => {

   let commonObjectService = null;
   let apiService = null;
   let userAdminService = null;
   let router = null;
   let restapiService = null;
   let httpService=null;

    beforeEach(() => {
  TestBed.configureTestingModule({
    declarations: [
        UserContactDetailsComponent,
        MockComponent({ selector: 'nav-main' }),
        MockComponent({ selector: 'nav-list' }),
        MockComponent({ selector: 'nav-search' })
      ],
      providers:[{provide:Http,deps:[MockBackend]},
        {provide: Router, useClass: RouterStub},
        {provide: UserService, useClass: UserService},
        [
        HttpProvider,
        MockBackend,
        BaseRequestOptions,
        {
          provide: Http,
          deps: [MockBackend, BaseRequestOptions],
          useFactory:
            (backend: XHRBackend, defaultOptions: BaseRequestOptions) => {
                return new Http(backend, defaultOptions);
            }
         }
      ],
      ],
      imports: [
        CommonModule
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
  });
});

     beforeEach(inject([CommonsObjectsService,RestApisService,ApiConfigService,UserService,Router]
    ,(_commonObjectService: CommonsObjectsService,_config: ApiConfigService,
      _restAPiService:RestApisService,
      _httpService:HttpProvider,
     _userService: UserService,
     _router: Router,
     _objectService: CommonsObjectsService) => {
   commonObjectService = _commonObjectService;
   apiService = _config;
   userAdminService=_userService;
   router=_router
   restapiService=_restAPiService;
   httpService = _httpService;
  }));

  it('Instance created for user contact details component', async(() => {
    const fixture = TestBed.createComponent(UserContactDetailsComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  }));
});



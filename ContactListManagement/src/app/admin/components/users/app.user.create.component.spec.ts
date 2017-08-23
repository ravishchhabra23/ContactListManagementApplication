import { TestBed, async,inject,ComponentFixture } from '@angular/core/testing';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import { AdminUserCreateComponent } from './app.user.create.component';
import {Router} from '@angular/router';
import {HttpProvider} from '../../../common/services/http/http.service';
import {Http} from '@angular/http';
import {EventService} from '../../../common/services/event/event.component';
import {ApiConfigService} from '../../../common/services/config/config.service';
import {RestApisService} from '../../../common/services/restapi/restapi.service';
import {CommonsObjectsService} from '../../../common/services/object/object.service'
import {UserAdminService} from '../../services/user/user.service.component'
import { CommonLoginComponent} from '../../../common/components/login/login.component';
import {MockComponent,RouterStub} from '../../../mock/app.mockcomponent';
import { MockBackend } from '@angular/http/testing';
import {CommonModule} from 'app/common/common.module';

describe('AdminUserCreateComponent', () => {

   let commonObjectService = null;
   let apiService = null;
   let userAdminService = null;
   let router = null;
   let restapiService = null;

    beforeEach(() => {
  TestBed.configureTestingModule({
    declarations: [
        AdminUserCreateComponent,
        MockComponent({ selector: 'nav-main' }),
        MockComponent({ selector: 'nav-list' }),
        MockComponent({ selector: 'nav-search' })
      ],
      providers:[{provide:Http,deps:[MockBackend]},
        {provide: Router, useClass: RouterStub},
        {provide: UserAdminService, useClass: UserAdminService},
      ],
      imports: [
        CommonModule
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
  });
});

     beforeEach(inject([CommonsObjectsService,RestApisService,ApiConfigService,UserAdminService,Router]
    ,(_commonObjectService: CommonsObjectsService,_config: ApiConfigService,
      _restAPiService:RestApisService,
     _userService: UserAdminService,
     _router: Router,
     _objectService: CommonsObjectsService) => {
   commonObjectService = _commonObjectService;
   apiService = _config;
   userAdminService=_userService;
   router=_router
   restapiService=_restAPiService;
  }));

  it('Instance created for admin user create', async(() => {
    const fixture = TestBed.createComponent(AdminUserCreateComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  }));
});



import { TestBed, async,inject,ComponentFixture } from '@angular/core/testing';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import { CommonLoginComponent } from './login.component';
import {Router} from '@angular/router';
import {HttpProvider} from '../../../common/services/http/http.service';
import {Http} from '@angular/http';
import {EventService} from '../../../common/services/event/event.component';
import {ApiConfigService} from '../../../common/services/config/config.service';
import {RestApisService} from '../../../common/services/restapi/restapi.service';
import {CommonsObjectsService} from '../../../common/services/object/object.service'
import {MockComponent,RouterStub} from '../../../mock/app.mockcomponent';
import { MockBackend } from '@angular/http/testing';

describe('CommonLoginComponent', () => {

   let commonObjectService = null;
   let apiService = null;
   let userAdminService = null;
   let router = null;
   let restapiService = null;

    beforeEach(() => {
  TestBed.configureTestingModule({
    declarations: [
        CommonLoginComponent,
        MockComponent({ selector: 'nav-main' }),
        MockComponent({ selector: 'nav-list' }),
        MockComponent({ selector: 'nav-search' })
      ],
      providers:[{provide:Http,deps:[MockBackend]},
        {provide: Router, useClass: RouterStub},
        {provide: CommonsObjectsService, useClass: CommonsObjectsService},
        {provide: HttpProvider, useClass: HttpProvider},
        {provide: ApiConfigService, useClass: ApiConfigService},
        {provide: RestApisService, useClass: RestApisService},
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
  });
});

     beforeEach(inject([CommonsObjectsService,RestApisService,ApiConfigService,Router]
    ,(_commonObjectService: CommonsObjectsService,_config: ApiConfigService,
      _restAPiService:RestApisService,
     _router: Router,
     _objectService: CommonsObjectsService) => {
   commonObjectService = _commonObjectService;
   apiService = _config;
   router=_router
   restapiService=_restAPiService;
  }));

  it('Instance created for common user login component..', async(() => {
    const fixture = TestBed.createComponent(CommonLoginComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  }));
});



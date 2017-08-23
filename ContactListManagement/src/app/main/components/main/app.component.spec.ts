import { TestBed, async,inject,ComponentFixture } from '@angular/core/testing';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import { AppComponent } from './app.component';
import {Http} from '@angular/http';
import {Router} from '@angular/router';
import {EventService} from '../../../common/services/event/event.component';
import {CommonsObjectsService} from '../../../common/services/object/object.service'
import {MockComponent,RouterStub} from '../../../mock/app.mockcomponent';
import {ApiConfigService} from '../../../common/services/config/config.service';
import { MockBackend } from '@angular/http/testing';
import {HttpProvider} from '../../../common/services/http/http.service';
import{CommonModule} from 'app/common/common.module';
import{AdminModule} from 'app/admin/admin.module';
import{UserModule} from 'app/user/user.module';

describe('AppComponent', () => {

   let commonObjectService = null;
  
   let userAdminService = null;
   let router = null;
   let eventservice = null;

    beforeEach(() => {
  TestBed.configureTestingModule({
    declarations: [
        AppComponent,
        MockComponent({ selector: 'nav-main' }),
        MockComponent({ selector: 'nav-list' }),
        MockComponent({ selector: 'nav-search' })
      ],
      providers:[{provide:Http,deps:[MockBackend]},
        {provide: Router, useClass: RouterStub},
      ],
       imports: [
        CommonModule,AdminModule,UserModule
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
  });
});

     beforeEach(inject([CommonsObjectsService,Router]
    ,(_commonObjectService: CommonsObjectsService,_eventService:EventService,
     _router: Router,
     _objectService: CommonsObjectsService) => {
   commonObjectService = _commonObjectService;
   eventservice = _eventService;
   router=_router
  }));

  it('Application is initialized here...', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  }));
});



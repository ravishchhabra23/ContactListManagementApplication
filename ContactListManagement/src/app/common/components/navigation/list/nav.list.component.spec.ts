import { TestBed, async,inject,ComponentFixture } from '@angular/core/testing';
import {NO_ERRORS_SCHEMA,ChangeDetectorRef} from '@angular/core';
import { NavListComponent } from './nav.list.component';
import {Router} from '@angular/router';
import {Http,BaseRequestOptions,XHRBackend} from '@angular/http';
import {EventService} from '../../../services/event/event.component';
import {CommonsObjectsService} from '../../../services/object/object.service';
import {HttpProvider} from '../../../services/http/http.service';
import {ApiConfigService} from '../../../services/config/config.service';
import {MockComponent,RouterStub} from '../../../../mock/app.mockcomponent';
import { MockBackend } from '@angular/http/testing';

describe('NavListComponent', () => {

   let commonObjectService = null;
   let eventService = null;
   let router = null;

    beforeEach(() => {
  TestBed.configureTestingModule({
    declarations: [
        NavListComponent,
        //MockComponent({ selector: 'nav-main' }),
        //MockComponent({ selector: 'nav-list' }),
        //MockComponent({ selector: 'nav-search' })
      ],
      providers:[{provide:Http,deps:[MockBackend]},
        {provide: Router, useClass: RouterStub},
        {provide: EventService, useClass: EventService},
        {provide: CommonsObjectsService, useClass: CommonsObjectsService},
        {provide: HttpProvider, useClass: HttpProvider},
        {provide: ApiConfigService, useClass: ApiConfigService},
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
  });
});

     beforeEach(inject([CommonsObjectsService,EventService,Router]
    ,(_commonObjectService: CommonsObjectsService,_eventService: EventService,_changedet:ChangeDetectorRef,
     _router: Router,
     _objectService: CommonsObjectsService) => {
   commonObjectService = _commonObjectService;
   eventService = _eventService;
   router = _router;
  }));

  it('Instance created for navigation list component', async(() => {
    const fixture = TestBed.createComponent(NavListComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  }));
});



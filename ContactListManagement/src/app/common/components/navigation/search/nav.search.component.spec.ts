import { TestBed, async,inject,ComponentFixture } from '@angular/core/testing';
import {NO_ERRORS_SCHEMA,ChangeDetectorRef} from '@angular/core';
import { NavsearchComponent } from './nav.search.component';
import {Router} from '@angular/router';
import {Http,BaseRequestOptions,XHRBackend} from '@angular/http';
import {EventService} from '../../../services/event/event.component';
import {CommonsObjectsService} from '../../../services/object/object.service';
import {HttpProvider} from '../../../services/http/http.service';
import {ApiConfigService} from '../../../services/config/config.service';
import {MockComponent,RouterStub} from '../../../../mock/app.mockcomponent';
import { MockBackend } from '@angular/http/testing';

describe('NavsearchComponent', () => {

   let commonObjectService = null;
   let eventService = null;
   let router = null;

    beforeEach(() => {
  TestBed.configureTestingModule({
    declarations: [
        NavsearchComponent
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

     beforeEach(inject([EventService]
    ,(_eventService: EventService) => {
   eventService = _eventService;
  }));

  it('Instance created for navigation search component', async(() => {
    const fixture = TestBed.createComponent(NavsearchComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  }));
});



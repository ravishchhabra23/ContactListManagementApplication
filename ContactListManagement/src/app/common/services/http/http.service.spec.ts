import { TestBed, inject } from '@angular/core/testing';
import { HttpProvider } from './http.service';
import {MockComponent,RouterStub} from '../../../mock/app.mockcomponent';
import { MockBackend } from '@angular/http/testing';
import {Http,BaseRequestOptions,XHRBackend,BaseResponseOptions} from '@angular/http';
import {ApiConfigService} from '../config/config.service';
import {Router} from '@angular/router';

describe('HttpProvider', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
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
         },
        BaseResponseOptions,
        {
          provide: Http,
          deps: [MockBackend, BaseResponseOptions],
          useFactory:
            (backend: XHRBackend, defaultResponseOptions: BaseResponseOptions) => {
                return new Response(backend, defaultResponseOptions);
            }
         },
        {provide: ApiConfigService, useClass: ApiConfigService},
        {provide: Router, useClass: RouterStub},
      ],
    });
  });

  it('Http Provider instantiated successfully..', inject([HttpProvider], (service: HttpProvider) => {
    expect(service).toBeTruthy();
  }));
});

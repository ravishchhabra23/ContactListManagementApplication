import { TestBed, inject } from '@angular/core/testing';
import { EventService } from './event.component';

describe('EventService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EventService]
    });
  });

  it('event service instantiated successfully..', inject([EventService], (service: EventService) => {
    expect(service).toBeTruthy();
  }));
});

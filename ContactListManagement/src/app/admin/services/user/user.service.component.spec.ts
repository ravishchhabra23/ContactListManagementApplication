import { TestBed, inject } from '@angular/core/testing';
import { UserAdminService } from './user.service.component';

describe('UserAdminService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserAdminService]
    });
  });

  it('user admin service created successfully', inject([UserAdminService], (service: UserAdminService) => {
    expect(service).toBeTruthy();
  }));
});

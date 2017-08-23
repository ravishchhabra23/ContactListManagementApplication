import { TestBed, inject } from '@angular/core/testing';
import { UserService } from './user.service';

describe('UserAdminService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserService]
    });
  });

  it('user service created successfully', inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
  }));
});

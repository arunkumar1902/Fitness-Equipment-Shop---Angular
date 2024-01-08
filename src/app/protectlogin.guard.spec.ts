import { TestBed } from '@angular/core/testing';

import { ProtectloginGuard } from './protectlogin.guard';

describe('ProtectloginGuard', () => {
  let guard: ProtectloginGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ProtectloginGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

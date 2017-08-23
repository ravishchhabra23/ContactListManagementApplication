import { TestBed, async } from '@angular/core/testing';
import { AlertDirective } from './alert.directive';

describe('AlertDirective', () => {
  it('directive successfully executed..', async(() => {
    const directive = new AlertDirective();
    expect(directive).toBeTruthy();
    expect(directive).toBeTruthy();
  }));
});

import { CustomDatePipe } from './date.pipe';
import {CommonsObjectsService} from '../../services/object/object.service';

describe('CustomDatePipe', () => {
  it('create an instance', () => {
    const pipe = new CustomDatePipe();
    expect(pipe).toBeTruthy();
  });
});

import { FilterPipe } from './filterpipe.pipe';
import {inject,TestBed} from '@angular/core/testing';
import {CommonsObjectsService} from '../../services/object/object.service';

describe('FilterPipe', () => {
  TestBed.configureTestingModule({
      providers: [
        CommonsObjectsService
    ]
});
  beforeEach(() => {
  TestBed.configureTestingModule({
    declarations: [FilterPipe]
  });
  TestBed.overrideComponent(FilterPipe, {
    set: {
      providers: [
        { provide: CommonsObjectsService, useClass: CommonsObjectsService }
      ]
    }
  }); 
});
let commonobj :CommonsObjectsService;
  it('create an instance', () => {
    const pipe = new FilterPipe(commonobj);
    expect(pipe).toBeTruthy();
  });
});

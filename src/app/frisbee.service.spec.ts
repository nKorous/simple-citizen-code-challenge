import { TestBed } from '@angular/core/testing';
import { SortedFrisbee } from './frisbee';

import { FrisbeeService } from './frisbee.service';

describe('FrisbeeService', () => {
  let service: FrisbeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FrisbeeService);
  });

  it('should return a grouped dataStructure when loadGroupedData() is called', () => {
    const expectedSet: SortedFrisbee[] = [
      { category: 'distance', frisbees: [] },
      { category: 'fairway', frisbees: [] },
      { category: 'midrange', frisbees: [] },
      { category: 'putter', frisbees: [] }
    ]

    service.loadGroupedData()
      .subscribe(data => {
        const testDataSet: SortedFrisbee[] = data.map(d => ({ category: d.category, frisbees: []}))


        expect(testDataSet).toEqual(expectedSet)
      })
  })

  it('should return a valid value when calling loadFrisbee() with the id of 1', () => {
    service.loadFrisbee('1')
      .subscribe(data => {
        expect(data).toBeTruthy()
      })
  })
});

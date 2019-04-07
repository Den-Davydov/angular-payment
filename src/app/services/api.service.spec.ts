import { TestBed } from '@angular/core/testing';
import { ApiService } from './api.service';
import { Payment } from '../models/payment';

let mockPayment: Payment;
let testService: ApiService;
let responsePropertyNames, expectedPropertyNames;

describe('ApiService', () => {
  beforeEach(async () => TestBed.configureTestingModule({
    providers: [ApiService]
  }));
  mockPayment = {
    name: 'Интернет',
    cost: 600,
    months: [
      {
        index: 0,
        value: true,
        days: 31
      },
      {
        index: 1,
        value: true,
        days: 28
      },
      {
        index: 2,
        value: false,
        days: 31
      },
      {
        index: 3,
        value: false,
        days: 30
      },
      {
        index: 4,
        value: false,
        days: 31
      },
      {
        index: 5,
        value: false,
        days: 30
      },
      {
        index: 6,
        value: false,
        days: 31
      },
      {
        index: 7,
        value: false,
        days: 31
      },
      {
        index: 8,
        value: false,
        days: 30
      },
      {
        index: 9,
        value: false,
        days: 31
      },
      {
        index: 10,
        value: false,
        days: 30
      },
      {
        index: 11,
        value: false,
        days: 31
      },
    ]
  };

  it('should be created', () => {
    testService = TestBed.get(ApiService);
    expect(testService).toBeTruthy();
  });

  it('getPayment should return an array with Payment objects', async () => {
    testService = TestBed.get(ApiService);
    testService.getData().subscribe(value => {
      responsePropertyNames = Object.getOwnPropertyNames(value[0]);
      expectedPropertyNames = Object.getOwnPropertyNames(mockPayment);
      expect(responsePropertyNames).toEqual(expectedPropertyNames);

    });
  });

});

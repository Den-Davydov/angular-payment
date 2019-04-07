import { PaymentService } from './payment.service';
import { Payment } from '../models/payment';

let mockPayment: Payment;
let mockPayments: Payment[];

describe('PaymentService', () => {
  let testService: PaymentService;

  beforeEach(() => {
    testService = new PaymentService();
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
    mockPayments = [
      {
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
          }
        ]
      },
      {
        name: 'Домашний телефон',
        cost: 500,
        months: [
          {
            index: 0,
            value: false,
            days: 31
          },
          {
            index: 1,
            value: false,
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
      },
      {
        name: 'Мобильный телефон',
        cost: 300,
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
            value: true,
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
          }
        ]
      },
      {
        name: 'IPTV',
        cost: 200,
        months: [
          {
            index: 0,
            value: false,
            days: 31
          },
          {
            index: 1,
            value: false,
            days: 28
          },
          {
            index: 2,
            value: true,
            days: 31
          },
          {
            index: 3,
            value: true,
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
          }
        ]
      },
      {
        name: 'Подписка на музыку',
        cost: 150,
        months: [
          {
            index: 0,
            value: false,
            days: 31
          },
          {
            index: 1,
            value: false,
            days: 28
          },
          {
            index: 2,
            value: true,
            days: 31
          },
          {
            index: 3,
            value: true,
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
          }
        ]
      },
      {
        name: 'Подписка на фильмы',
        cost: 150,
        months: [
          {
            index: 0,
            value: false,
            days: 31
          },
          {
            index: 1,
            value: false,
            days: 28
          },
          {
            index: 2,
            value: true,
            days: 31
          },
          {
            index: 3,
            value: true,
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
          }
        ]
      },
      {
        name: 'Абонимент на фитнес',
        cost: 1000,
        months: [
          {
            index: 0,
            value: false,
            days: 31
          },
          {
            index: 1,
            value: false,
            days: 28
          },
          {
            index: 2,
            value: false,
            days: 31
          },
          {
            index: 3,
            value: true,
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
          }
        ]
      }
    ];
  });

  it('should be created', () => {
    expect(testService).toBeTruthy();
  });

  it('create new Payment should return async Payment', () => {
    const newTable: Payment[] = [...mockPayments, mockPayment];
    expect(testService.createNewPayment(mockPayment, mockPayments)).toEqual(newTable);
  });

  it('deletePayment should return mockPayments', () => {
    mockPayments.splice(mockPayments.indexOf(mockPayment), 1);
    expect(testService.deletePayment(mockPayment, mockPayments)).toEqual(mockPayments);

  });

  it('calculateTotalSum should update', () => {
    expect(testService.calculateTotalSum(mockPayments)).toBe(122900);
  });

  it('calculatePaymentSum should update', () => {
    expect(testService.calculatePaymentSum(mockPayment)).toEqual(35400);
  });

});

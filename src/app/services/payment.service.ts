import {Injectable} from "@angular/core";
import {Payment} from "../models/payment";
import {months} from "../mock/months";
import {Month} from "../models/month";


@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor() {
  }

  createNewPayment(payment: Payment, paymentTable: Payment[]): Payment[] {
    let newMonths: Month[] =[];
    for (let i = 0; i < months.length; i++) {
      newMonths.push({ index: months[i].index, value: months[i].value, days: months[i].days });
    }
    payment.months = newMonths;
    return [...paymentTable, payment];
  }

  deletePayment(payment: Payment, paymentTable: Payment[]): Payment[] {
    paymentTable.splice(paymentTable.indexOf(payment), 1);
    return paymentTable;
  }

  calculatePaymentSum(payment: Payment): number {
    let sum: number = 0;
    for (let i = 0; i < payment.months.length; i++) {
      if (payment.months[i].value) {
        sum += payment.months[i].days
      }
    }
    sum *= payment.cost;
    return sum;
  }

  calculateTotalSum(paymentTable: Payment[]): number {
    let totalSum = 0;
    paymentTable.forEach(payment => {
      payment.months.forEach(
        month => {
          if (month.value) {
            totalSum += month.days * payment.cost;
          }
        }
      );
    });
    return totalSum;
  }
}

import {Component, OnInit} from "@angular/core";
import {Payment} from "src/app/models/payment";
import {PaymentService} from "src/app/services/payment.service";
import {ApiService} from "src/app/services/api.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {

  paymentTable: Payment[];
  totalSum: number;

  constructor(private paymentService: PaymentService,
              private apiService: ApiService) {
  }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.apiService.getData().subscribe(
      data => {
        this.paymentTable = data;
        this.totalSum = this.paymentService.calculateTotalSum(this.paymentTable);
      });
  }

  onCreateNewPayment(payment: Payment) {
    this.paymentTable = this.paymentService.createNewPayment(payment, this.paymentTable);
  }

  onDeletePayment(payment: Payment) {
    this.paymentTable = this.paymentService.deletePayment(payment, this.paymentTable);
    this.totalSum = this.totalSum - this.paymentService.calculatePaymentSum(payment);
  }

  onChangeTable(paymentIndex: number[]) {
    this.paymentTable[paymentIndex[0]].months[paymentIndex[1]].value = !this.paymentTable[paymentIndex[0]].months[paymentIndex[1]].value;
    this.paymentTable[paymentIndex[0]].months[paymentIndex[1]].value ?
      this.totalSum += this.paymentTable[paymentIndex[0]].cost * this.paymentTable[paymentIndex[0]].months[paymentIndex[1]].days :
      this.totalSum -= this.paymentTable[paymentIndex[0]].cost * this.paymentTable[paymentIndex[0]].months[paymentIndex[1]].days;
  }
}

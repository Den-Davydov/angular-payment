import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from "@angular/core";
import {MatTable} from "@angular/material/table";
import {Payment} from "src/app/models/payment";
import {Month} from "src/app/models/month";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() paymentTable: Payment[];
  @Output() deletePayment = new EventEmitter<Payment>();
  @Output() changeTable = new EventEmitter<number[]>();
  @ViewChild(MatTable) matTable: MatTable<any>;

  constructor() {
  }

  displayedColumns: string[] = [
    'Наименование платежа', 'Стоимость за день', 'Янв',
    'Фев', 'Мар', 'Апр', 'Май',
    'Июн', 'Июл', 'Авг', 'Сен',
    'Окт', 'Ноя', 'Дек', 'Удалить'];

  ngOnInit() {
  }

  onDeletePayment(currentPayment: Payment) {
    this.deletePayment.emit(currentPayment);
    this.matTable.renderRows();
  }

  onChangeTable(currentPayment: Payment, currentMonth: Month) {
    let indexPayment = this.paymentTable.indexOf(currentPayment);
    let indexMonth = this.paymentTable[indexPayment].months.indexOf(currentMonth);
    this.changeTable.emit([indexPayment, indexMonth])
  }
}

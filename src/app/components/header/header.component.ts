import {Component, EventEmitter, OnInit, Output} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Payment} from "src/app/models/payment";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() createNewPayment = new EventEmitter<Payment>();
  formPayment: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.formPayment = this.formBuilder.group({
      paymentName: ['', Validators.required],
      paymentCost: ['', Validators.compose([Validators.required,
        Validators.pattern('^([1-9][0-9]*)$')])]
    });
  }

  onSubmit() {
    const value = this.formPayment.value;
    this.formPayment.reset();
    this.formPayment.get('paymentName').setErrors(null);
    this.formPayment.get('paymentCost').setErrors(null);
    this.createNewPayment.emit({name: value.paymentName, cost: value.paymentCost} as Payment);
  }
}



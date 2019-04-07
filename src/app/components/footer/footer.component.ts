import {Component, Input, OnInit} from "@angular/core";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class SummaryComponent implements OnInit {

  @Input() totalSum: number;

  constructor() {
  }

  ngOnInit() {
  }

}

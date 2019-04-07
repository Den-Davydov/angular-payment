import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {HeaderComponent} from "./header.component";
import {DebugElement} from "@angular/core";
import {By} from "@angular/platform-browser";
import {FormBuilder, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {Payment} from "src/app/models/payment";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


let mockPayment: Payment;

describe('HeaderComponent', () => {

  let comp: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let de: DebugElement;
  let element: HTMLElement;
  let responsePayment: Payment;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HeaderComponent
      ],
      imports: [
        MatButtonModule,
        MatInputModule,
        ReactiveFormsModule,
        FormsModule,
        BrowserAnimationsModule
      ],
      providers: [
        FormBuilder
      ]
    }).compileComponents();
  }));

  beforeEach((() => {
    fixture = TestBed.createComponent(HeaderComponent);
    comp = fixture.componentInstance;
    comp.ngOnInit();
    de = fixture.debugElement.query(By.css('.header'));
    element = de.nativeElement;
    comp.createNewPayment.subscribe((response: Payment) => {
      responsePayment = response
    });
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
    }
  }));

  it('should have a Component HeaderComponent', () => {
    expect(comp).toBeTruthy();
  });

  it('should have a HeaderComponent to display the form', () => {
    expect(element.innerHTML).toContain("form");
  })

  it('should have a HeaderComponent to display the h1', () => {
    expect(element.innerHTML).toContain("h1");
  })
  it('should have a HeaderComponent to display the button', () => {
    expect(element.innerHTML).toContain("button");
  })
  it('form invalid when empty', () => {
    expect(comp.formPayment.valid).toBeFalsy();
  });

  it('name payment field validity', () => {
    let name = comp.formPayment.controls['paymentName'];
    expect(name.valid).toBeFalsy();
  });

  it('cost payment field validity', () => {
    let cost = comp.formPayment.controls['paymentCost'];
    expect(cost.valid).toBeFalsy();
  });

  it('name field validity', () => {
    let name = comp.formPayment.controls['paymentName'];
    let errors = name.errors || {};
    expect(errors['required']).toBeTruthy();
  });

  it('cost field validity', () => {
    let cost = comp.formPayment.controls['paymentCost'];
    let errors = cost.errors || {};
    expect(errors['required']).toBeTruthy();
  });

  it('submitting a form emits a payment', () => {
    expect(comp.formPayment.valid).toBeFalsy();
    comp.formPayment.controls['paymentName'].setValue("Интернет");
    comp.formPayment.controls['paymentCost'].setValue(600);
    expect(comp.formPayment.valid).toBeTruthy();

    comp.onSubmit();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(responsePayment.name).toEqual(mockPayment.name);
      expect(responsePayment.cost).toEqual(mockPayment.cost);
    });
  });
});

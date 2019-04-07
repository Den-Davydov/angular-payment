import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {SummaryComponent} from "./footer.component";
import {DebugElement} from "@angular/core";
import {By} from "@angular/platform-browser";


describe('HeaderComponent', () => {

  let comp: SummaryComponent;
  let fixture: ComponentFixture<SummaryComponent>;
  let de: DebugElement;
  let element: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SummaryComponent
      ]
    }).compileComponents();
  }));

  beforeEach((() => {
    fixture = TestBed.createComponent(SummaryComponent);
    comp = fixture.componentInstance;
    comp.ngOnInit();
    de = fixture.debugElement.query(By.css('.footer'));
    element = de.nativeElement;
  }));


  it('should have a Component FooterComponent', () => {
    expect(comp).toBeTruthy();
  });

  it('should have a FooterComponent to display the sum', () => {
    expect(element.innerHTML).toContain("footer");
  });

});

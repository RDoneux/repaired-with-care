import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationFeedbackComponent } from './validation-feedback.component';

describe('ValidationFeedbackComponent', () => {
  let component: ValidationFeedbackComponent;
  let fixture: ComponentFixture<ValidationFeedbackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ValidationFeedbackComponent]
    });
    fixture = TestBed.createComponent(ValidationFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

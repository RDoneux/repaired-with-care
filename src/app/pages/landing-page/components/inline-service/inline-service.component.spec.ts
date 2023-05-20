import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineServiceComponent } from './inline-service.component';

describe('InlineServiceComponent', () => {
  let component: InlineServiceComponent;
  let fixture: ComponentFixture<InlineServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InlineServiceComponent]
    });
    fixture = TestBed.createComponent(InlineServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineServicesComponent } from './inline-services.component';

describe('InlineServicesComponent', () => {
  let component: InlineServicesComponent;
  let fixture: ComponentFixture<InlineServicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InlineServicesComponent]
    });
    fixture = TestBed.createComponent(InlineServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StyledPointComponent } from './styled-point.component';

describe('StyledPointComponent', () => {
  let component: StyledPointComponent;
  let fixture: ComponentFixture<StyledPointComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StyledPointComponent]
    });
    fixture = TestBed.createComponent(StyledPointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

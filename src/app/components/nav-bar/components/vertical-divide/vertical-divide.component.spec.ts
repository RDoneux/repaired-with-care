import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalDivideComponent } from './vertical-divide.component';

describe('VerticalDivideComponent', () => {
  let component: VerticalDivideComponent;
  let fixture: ComponentFixture<VerticalDivideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerticalDivideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerticalDivideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Card8Component } from './card8.component';

describe('Card8Component', () => {
  let component: Card8Component;
  let fixture: ComponentFixture<Card8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Card8Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Card8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

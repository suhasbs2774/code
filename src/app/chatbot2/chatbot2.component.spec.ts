import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chatbot2Component } from './chatbot2.component';

describe('Chatbot2Component', () => {
  let component: Chatbot2Component;
  let fixture: ComponentFixture<Chatbot2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Chatbot2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Chatbot2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

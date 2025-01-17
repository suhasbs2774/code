import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CbotComponent } from './cbot.component';

describe('CbotComponent', () => {
  let component: CbotComponent;
  let fixture: ComponentFixture<CbotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CbotComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CbotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

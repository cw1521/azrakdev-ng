import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AI2048Component } from './ai2048.component';

describe('AI2048Component', () => {
  let component: AI2048Component;
  let fixture: ComponentFixture<AI2048Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AI2048Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AI2048Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

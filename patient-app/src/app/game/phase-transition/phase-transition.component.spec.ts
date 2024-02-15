import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhaseTransitionComponent } from './phase-transition.component';

describe('PhaseTransitionComponent', () => {
  let component: PhaseTransitionComponent;
  let fixture: ComponentFixture<PhaseTransitionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhaseTransitionComponent]
    });
    fixture = TestBed.createComponent(PhaseTransitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

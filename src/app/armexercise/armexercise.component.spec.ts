import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArmexerciseComponent } from './armexercise.component';

describe('ArmexerciseComponent', () => {
  let component: ArmexerciseComponent;
  let fixture: ComponentFixture<ArmexerciseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArmexerciseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArmexerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

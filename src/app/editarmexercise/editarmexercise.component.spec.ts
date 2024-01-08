import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarmexerciseComponent } from './editarmexercise.component';

describe('EditarmexerciseComponent', () => {
  let component: EditarmexerciseComponent;
  let fixture: ComponentFixture<EditarmexerciseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarmexerciseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarmexerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

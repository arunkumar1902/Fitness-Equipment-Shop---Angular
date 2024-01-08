import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GymequipmentComponent } from './gymequipment.component';

describe('GymequipmentComponent', () => {
  let component: GymequipmentComponent;
  let fixture: ComponentFixture<GymequipmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GymequipmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GymequipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

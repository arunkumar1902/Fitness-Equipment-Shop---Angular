import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditgymequipmentComponent } from './editgymequipment.component';

describe('EditgymequipmentComponent', () => {
  let component: EditgymequipmentComponent;
  let fixture: ComponentFixture<EditgymequipmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditgymequipmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditgymequipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

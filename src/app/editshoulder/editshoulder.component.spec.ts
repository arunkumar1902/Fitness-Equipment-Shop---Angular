import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditshoulderComponent } from './editshoulder.component';

describe('EditshoulderComponent', () => {
  let component: EditshoulderComponent;
  let fixture: ComponentFixture<EditshoulderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditshoulderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditshoulderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

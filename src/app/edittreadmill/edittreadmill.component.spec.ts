import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdittreadmillComponent } from './edittreadmill.component';

describe('EdittreadmillComponent', () => {
  let component: EdittreadmillComponent;
  let fixture: ComponentFixture<EdittreadmillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdittreadmillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdittreadmillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

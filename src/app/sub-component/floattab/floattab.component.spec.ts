import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FloattabComponent } from './floattab.component';

describe('FloattabComponent', () => {
  let component: FloattabComponent;
  let fixture: ComponentFixture<FloattabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FloattabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FloattabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirestComponentsComponent } from './firest-components.component';

describe('FirestComponentsComponent', () => {
  let component: FirestComponentsComponent;
  let fixture: ComponentFixture<FirestComponentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FirestComponentsComponent]
    });
    fixture = TestBed.createComponent(FirestComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

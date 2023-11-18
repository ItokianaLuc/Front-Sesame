import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddsesamienComponent } from './addsesamien.component';

describe('AddsesamienComponent', () => {
  let component: AddsesamienComponent;
  let fixture: ComponentFixture<AddsesamienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddsesamienComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddsesamienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

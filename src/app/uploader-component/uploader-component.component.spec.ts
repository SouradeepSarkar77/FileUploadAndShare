import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploaderComponentComponent } from './uploader-component.component';

describe('UploaderComponentComponent', () => {
  let component: UploaderComponentComponent;
  let fixture: ComponentFixture<UploaderComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UploaderComponentComponent]
    });
    fixture = TestBed.createComponent(UploaderComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

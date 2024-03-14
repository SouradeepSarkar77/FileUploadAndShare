import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReciverComponentComponent } from './reciver-component.component';

describe('ReciverComponentComponent', () => {
  let component: ReciverComponentComponent;
  let fixture: ComponentFixture<ReciverComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReciverComponentComponent]
    });
    fixture = TestBed.createComponent(ReciverComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

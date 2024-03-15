import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OBSComponent } from './obs.component';

describe('OBSComponent', () => {
  let component: OBSComponent;
  let fixture: ComponentFixture<OBSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OBSComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OBSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

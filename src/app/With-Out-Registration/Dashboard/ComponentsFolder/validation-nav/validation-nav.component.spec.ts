import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationNavComponent } from './validation-nav.component';

describe('ValidationNavComponent', () => {
  let component: ValidationNavComponent;
  let fixture: ComponentFixture<ValidationNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValidationNavComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ValidationNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

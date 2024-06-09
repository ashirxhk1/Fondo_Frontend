import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterFrenchiseComponent } from './register-frenchise.component';

describe('RegisterFrenchiseComponent', () => {
  let component: RegisterFrenchiseComponent;
  let fixture: ComponentFixture<RegisterFrenchiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterFrenchiseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegisterFrenchiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

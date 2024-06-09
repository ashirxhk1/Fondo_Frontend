import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomServiceNavComponent } from './custom-service-nav.component';

describe('CustomServiceNavComponent', () => {
  let component: CustomServiceNavComponent;
  let fixture: ComponentFixture<CustomServiceNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomServiceNavComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomServiceNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
